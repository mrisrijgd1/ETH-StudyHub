-- Suggestions ("curated data pool", Srish 14 Nov 2026): signed-in students suggest a fix or an addition
-- for a page; nothing changes on the site until an admin accepts it and it ships in a normal update.
-- Safe to rerun.

create table if not exists public.suggestions (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  page text not null check (char_length(page) between 1 and 100),
  section text check (char_length(section) <= 200),
  quote text check (char_length(quote) <= 1000),
  kind text not null default 'mistake' check (kind in ('mistake', 'unclear', 'addition', 'other')),
  body text not null check (char_length(body) between 5 and 4000),
  reason text check (char_length(reason) <= 2000),
  anonymous boolean not null default false,
  status text not null default 'new' check (status in ('new', 'accepted', 'rejected', 'done')),
  review_note text check (char_length(review_note) <= 2000),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);
alter table public.suggestions enable row level security;
drop policy if exists "own suggestions: read" on public.suggestions;
drop policy if exists "own suggestions: create" on public.suggestions;
drop policy if exists "own suggestions: delete" on public.suggestions;
create policy "own suggestions: read"   on public.suggestions for select to authenticated using (user_id = auth.uid());
create policy "own suggestions: create" on public.suggestions for insert to authenticated
  with check (user_id = auth.uid() and status = 'new' and review_note is null and reviewed_at is null);
create policy "own suggestions: delete" on public.suggestions for delete to authenticated using (user_id = auth.uid() and status = 'new');
grant select, insert, delete on public.suggestions to authenticated;
grant usage, select on all sequences in schema public to authenticated;
grant select, insert, update, delete on public.suggestions to service_role;

-- Spam limit: at most 20 suggestions per person per day.
create or replace function public.suggestions_limit() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if (select count(*) from public.suggestions where user_id = new.user_id and created_at > now() - interval '1 day') >= 20 then
    raise exception 'Daily limit reached (20 suggestions). Thank you! Please try again tomorrow.';
  end if;
  return new;
end $$;
drop trigger if exists suggestions_limit on public.suggestions;
create trigger suggestions_limit before insert on public.suggestions for each row execute function public.suggestions_limit();

-- Admins (who review). Seeded with the site owner's account: the account that ran the connector test on
-- 14 Nov 2026 (identified by that test's plan version), so no e-mail address appears in this public file.
create table if not exists public.admins (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.admins enable row level security;
grant select on public.admins, public.profiles to service_role;
insert into public.admins (user_id)
  select user_id from public.my_versions where key = 'plan' and content->>'text' = 'Connector test line (Claude), will be removed.' limit 1
  on conflict do nothing;

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- Review list for admins: nickname (or "anonymous"), never the account id.
create or replace function public.suggestions_admin_list(p_status text default null)
returns table (id bigint, page text, section text, quote text, kind text, body text, reason text, author text, status text, review_note text, created_at timestamptz, reviewed_at timestamptz)
language sql stable security definer set search_path = '' as $$
  select s.id, s.page, s.section, s.quote, s.kind, s.body, s.reason,
         case when s.anonymous or p.nickname is null then 'anonymous' else p.nickname end,
         s.status, s.review_note, s.created_at, s.reviewed_at
  from public.suggestions s left join public.profiles p on p.id = s.user_id
  where public.is_admin() and (p_status is null or s.status = p_status)
  order by s.created_at desc limit 500;
$$;

create or replace function public.suggestions_admin_set(p_id bigint, p_status text, p_note text default null)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'Only admins can review suggestions.'; end if;
  if p_status not in ('new', 'accepted', 'rejected', 'done') then raise exception 'Unknown status.'; end if;
  update public.suggestions set status = p_status, review_note = left(p_note, 2000), reviewed_at = now() where id = p_id;
end $$;

revoke all on function public.suggestions_admin_list(text) from public, anon;
revoke all on function public.suggestions_admin_set(bigint, text, text) from public, anon;
grant execute on function public.suggestions_admin_list(text), public.suggestions_admin_set(bigint, text, text), public.is_admin() to authenticated;
