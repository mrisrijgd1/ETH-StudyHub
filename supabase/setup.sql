-- StudyHub database setup (run once in Supabase: SQL Editor -> New query -> paste -> Run)
-- Creates: profiles (nickname, leaderboard opt-in), progress (per page: done, rating, note),
-- forum (threads + replies, optionally anonymous), public read-only views, and "delete my account".

-- 1. Profiles -------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text unique check (char_length(nickname) between 2 and 30),
  leaderboard boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "own profile: read"   on public.profiles for select to authenticated using (id = auth.uid());
create policy "own profile: create" on public.profiles for insert to authenticated with check (id = auth.uid());
create policy "own profile: change" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
grant select, insert, update on public.profiles to authenticated;

-- 2. Progress (one row per user and page) --------------------------------
create table if not exists public.progress (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  page text not null check (char_length(page) <= 100),
  done boolean not null default false,
  rating smallint check (rating between 1 and 5),
  note text check (char_length(note) <= 5000),
  updated_at timestamptz not null default now(),
  primary key (user_id, page)
);
alter table public.progress enable row level security;
create policy "own progress: read"   on public.progress for select to authenticated using (user_id = auth.uid());
create policy "own progress: create" on public.progress for insert to authenticated with check (user_id = auth.uid());
create policy "own progress: change" on public.progress for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own progress: delete" on public.progress for delete to authenticated using (user_id = auth.uid());
grant select, insert, update, delete on public.progress to authenticated;

-- 3. Forum ----------------------------------------------------------------
create table if not exists public.forum_threads (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  topic text check (char_length(topic) <= 100),          -- e.g. 'lesson-05' or 'general'
  title text not null check (char_length(title) between 3 and 150),
  body text not null check (char_length(body) between 1 and 5000),
  anonymous boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.forum_posts (
  id bigint generated always as identity primary key,
  thread_id bigint not null references public.forum_threads(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  body text not null check (char_length(body) between 1 and 5000),
  anonymous boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.forum_threads enable row level security;
alter table public.forum_posts enable row level security;
-- Raw tables: you only see/delete your own rows (so nobody can find out who posted anonymously).
create policy "own threads: read"   on public.forum_threads for select to authenticated using (user_id = auth.uid());
create policy "own threads: create" on public.forum_threads for insert to authenticated with check (user_id = auth.uid());
create policy "own threads: delete" on public.forum_threads for delete to authenticated using (user_id = auth.uid());
create policy "own posts: read"     on public.forum_posts for select to authenticated using (user_id = auth.uid());
create policy "own posts: create"   on public.forum_posts for insert to authenticated with check (user_id = auth.uid());
create policy "own posts: delete"   on public.forum_posts for delete to authenticated using (user_id = auth.uid());
grant select, insert, delete on public.forum_threads, public.forum_posts to authenticated;

-- Public reading views (everyone, also guests): show nickname or 'anonymous', never the account.
create or replace view public.forum_threads_public as
  select t.id, t.topic, t.title, t.body, t.created_at,
         case when t.anonymous or p.nickname is null then 'anonymous' else p.nickname end as author,
         (t.user_id = auth.uid()) as mine,
         (select count(*) from public.forum_posts r where r.thread_id = t.id) as replies
  from public.forum_threads t left join public.profiles p on p.id = t.user_id;
create or replace view public.forum_posts_public as
  select r.id, r.thread_id, r.body, r.created_at,
         case when r.anonymous or p.nickname is null then 'anonymous' else p.nickname end as author,
         (r.user_id = auth.uid()) as mine
  from public.forum_posts r left join public.profiles p on p.id = r.user_id;
grant select on public.forum_threads_public, public.forum_posts_public to anon, authenticated;

-- 4. Leaderboard (opt-in only): consistency, not speed ---------------------
create or replace view public.leaderboard as
  select p.nickname,
         count(*) filter (where g.done) as pages_done,
         count(distinct g.updated_at::date) filter (where g.updated_at > now() - interval '30 days') as active_days_30
  from public.profiles p join public.progress g on g.user_id = p.id
  where p.leaderboard and p.nickname is not null
  group by p.nickname;
grant select on public.leaderboard to anon, authenticated;

-- 5. Delete my account (removes profile, progress and forum posts) -----------
create or replace function public.delete_my_account() returns void
language sql security definer set search_path = '' as $$
  delete from auth.users where id = auth.uid();
$$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
