-- StudyHub connector: personal layer (run automatically by .github/workflows/connector-deploy.yml).
-- Safe to run more than once. Everything is private to each account (row level security).

-- 1. Personal items: plan, notes, questions, flashcards, design ------------------
create table if not exists public.my_items (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  key text not null check (key in ('plan','notes','questions','flashcards','design')),
  content jsonb not null,
  source text not null default 'site' check (source in ('site','ai','undo','restore','reset')),
  updated_at timestamptz not null default now(),
  primary key (user_id, key),
  check (pg_column_size(content) < 300000)
);
alter table public.my_items enable row level security;
drop policy if exists "own items: read" on public.my_items;
drop policy if exists "own items: write" on public.my_items;
create policy "own items: read"  on public.my_items for select to authenticated using (user_id = auth.uid());
create policy "own items: write" on public.my_items for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
grant select, insert, update, delete on public.my_items to authenticated;

-- 2. Version history for personal items AND progress (undo, history, reset) -------
create table if not exists public.my_versions (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  key text not null,                 -- 'plan', 'notes', ..., or 'progress:<page>'
  content jsonb,                     -- the state AFTER the change (null = deleted)
  source text not null default 'site',
  created_at timestamptz not null default now()
);
create index if not exists my_versions_user_key on public.my_versions (user_id, key, id desc);
alter table public.my_versions enable row level security;
drop policy if exists "own versions: read" on public.my_versions;
create policy "own versions: read" on public.my_versions for select to authenticated using (user_id = auth.uid());
grant select on public.my_versions to authenticated;

create or replace function public.my_items_log() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if tg_op = 'DELETE' then
    insert into public.my_versions (user_id, key, content, source) values (old.user_id, old.key, null, 'reset');
    return old;
  end if;
  insert into public.my_versions (user_id, key, content, source) values (new.user_id, new.key, new.content, new.source);
  -- keep the newest 200 versions per item
  delete from public.my_versions v where v.user_id = new.user_id and v.key = new.key
    and v.id < (select min(id) from (select id from public.my_versions w where w.user_id = new.user_id and w.key = new.key order by id desc limit 200) s);
  return new;
end $$;
drop trigger if exists my_items_log on public.my_items;
create trigger my_items_log after insert or update or delete on public.my_items for each row execute function public.my_items_log();

create or replace function public.progress_log() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if tg_op = 'DELETE' then
    insert into public.my_versions (user_id, key, content, source) values (old.user_id, 'progress:' || old.page, null, 'reset');
    return old;
  end if;
  insert into public.my_versions (user_id, key, content)
  values (new.user_id, 'progress:' || new.page, jsonb_build_object('done', new.done, 'rating', new.rating, 'note', new.note));
  return new;
end $$;
drop trigger if exists progress_log on public.progress;
create trigger progress_log after insert or update or delete on public.progress for each row execute function public.progress_log();

-- Restore one saved version (used by "undo" and "history" on the site and in the AI)
create or replace function public.my_restore_version(p_id bigint) returns void
language plpgsql security definer set search_path = '' as $$
declare v public.my_versions;
begin
  select * into v from public.my_versions where id = p_id and user_id = auth.uid();
  if not found then raise exception 'version not found'; end if;
  if v.key like 'progress:%' then
    if v.content is null then
      delete from public.progress where user_id = v.user_id and page = substr(v.key, 10);
    else
      insert into public.progress (user_id, page, done, rating, note, updated_at)
      values (v.user_id, substr(v.key, 10), coalesce((v.content->>'done')::boolean, false),
              (v.content->>'rating')::smallint, v.content->>'note', now())
      on conflict (user_id, page) do update set done = excluded.done, rating = excluded.rating, note = excluded.note, updated_at = now();
    end if;
  else
    if v.content is null then
      delete from public.my_items where user_id = v.user_id and key = v.key;
    else
      insert into public.my_items (user_id, key, content, source, updated_at) values (v.user_id, v.key, v.content, 'restore', now())
      on conflict (user_id, key) do update set content = excluded.content, source = 'restore', updated_at = now();
    end if;
  end if;
end $$;
revoke all on function public.my_restore_version(bigint) from public, anon;
grant execute on function public.my_restore_version(bigint) to authenticated;

-- 3. Exercise state, attempts, results (written by the connector server only) -----
create table if not exists public.item_state (
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  hints_shown int not null default 0,
  attempted_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, item_id)
);
create table if not exists public.attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  kind text not null default 'exercise',
  attempt text check (char_length(attempt) <= 20000),
  created_at timestamptz not null default now()
);
create table if not exists public.results (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  kind text not null default 'exercise' check (kind in ('exercise','exam','mock','check')),
  score numeric, max_score numeric,
  summary text check (char_length(summary) <= 5000),
  mistakes jsonb not null default '[]',
  topics text[] not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists results_user on public.results (user_id, created_at desc);
create table if not exists public.mocks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_id text not null,
  minutes int not null,
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  score numeric, max_score numeric,
  feedback text check (char_length(feedback) <= 20000)
);
alter table public.item_state enable row level security;
alter table public.attempts enable row level security;
alter table public.results enable row level security;
alter table public.mocks enable row level security;
drop policy if exists "own state: read" on public.item_state;
drop policy if exists "own attempts: read" on public.attempts;
drop policy if exists "own results: read" on public.results;
drop policy if exists "own results: delete" on public.results;
drop policy if exists "own mocks: read" on public.mocks;
create policy "own state: read"     on public.item_state for select to authenticated using (user_id = auth.uid());
create policy "own attempts: read"  on public.attempts  for select to authenticated using (user_id = auth.uid());
create policy "own results: read"   on public.results   for select to authenticated using (user_id = auth.uid());
create policy "own results: delete" on public.results   for delete to authenticated using (user_id = auth.uid());
create policy "own mocks: read"     on public.mocks     for select to authenticated using (user_id = auth.uid());
grant select on public.item_state, public.attempts, public.mocks to authenticated;
grant select, delete on public.results to authenticated;

-- 4. Private storage: content index + page images, and the secret library -----------
insert into storage.buckets (id, name, public) values ('connector', 'connector', false) on conflict (id) do nothing;
insert into storage.buckets (id, name, public) values ('library', 'library', false) on conflict (id) do nothing;
-- No storage policies: only the connector server (service role) can read these buckets.
