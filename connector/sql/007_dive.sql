-- Exam Dive: private question bank for signed-in users + leaderboard. Safe to rerun.
-- Reviewed and applied by the maintainer (runs with the other connector/sql files).

-- 1. Private bucket "dive": the question bank (uploaded by the library sync, see connector/build/build_dive.py).
--    Signed-in users may read it; guests may not. Nobody but the service role may write.
insert into storage.buckets (id, name, public) values ('dive', 'dive', false) on conflict (id) do nothing;
drop policy if exists "dive bank: signed-in read" on storage.objects;
create policy "dive bank: signed-in read" on storage.objects
  for select to authenticated using (bucket_id = 'dive');

-- 2. One row per finished timed, unfiltered dive (practice and chapter-filtered dives are never sent).
create table if not exists public.dive_runs (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  subject text not null check (subject in ('analysis', 'physics', 'mixed')),
  timer integer not null check (timer in (30, 60, 120, 180, 300)),
  depth integer not null check (depth between 0 and 11000),
  answers integer not null check (answers between 0 and 24),
  created_at timestamptz not null default now()
);
create index if not exists dive_runs_board on public.dive_runs (subject, timer, depth desc);
alter table public.dive_runs enable row level security;
drop policy if exists "dive runs: own read" on public.dive_runs;
drop policy if exists "dive runs: own insert" on public.dive_runs;
create policy "dive runs: own read" on public.dive_runs for select to authenticated using (user_id = auth.uid());
create policy "dive runs: own insert" on public.dive_runs for insert to authenticated with check (user_id = auth.uid());
-- No update/delete policy: runs cannot be edited from the browser. Deleting the account removes them (cascade).
grant select, insert on public.dive_runs to authenticated;

-- 3. Leaderboard: best depth per person for one subject x timer. Only signed-in users can read it,
--    and only people who opted in to the StudyHub leaderboard (profiles.leaderboard) with a nickname appear.
create or replace function public.dive_leaderboard(p_subject text, p_timer integer)
returns table (nickname text, depth integer, answers integer, reached_at timestamptz)
language sql stable security definer set search_path = public as $$
  select p.nickname, b.depth, b.answers, b.created_at
  from (
    select distinct on (r.user_id) r.user_id, r.depth, r.answers, r.created_at
    from public.dive_runs r
    where r.subject = p_subject and r.timer = p_timer
    order by r.user_id, r.depth desc, r.created_at asc
  ) b
  join public.profiles p on p.id = b.user_id
  where p.leaderboard and p.nickname is not null
  order by b.depth desc, b.created_at asc
  limit 20;
$$;
revoke all on function public.dive_leaderboard(text, integer) from public, anon;
grant execute on function public.dive_leaderboard(text, integer) to authenticated;
