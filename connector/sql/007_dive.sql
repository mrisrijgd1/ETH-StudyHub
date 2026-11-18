-- Exam Dive: private question bank for signed-in users. Safe to rerun.
-- Reviewed and applied by the maintainer (runs with the other connector/sql files). Leaderboard: 008_dive_leaderboard.sql.

-- 1. Private bucket "dive": the question bank (uploaded by the library sync, see connector/build/build_dive.py).
--    Signed-in users may read it; guests may not. Nobody but the service role may write.
insert into storage.buckets (id, name, public) values ('dive', 'dive', false) on conflict (id) do nothing;
drop policy if exists "dive bank: signed-in read" on storage.objects;
create policy "dive bank: signed-in read" on storage.objects
  for select to authenticated using (bucket_id = 'dive');
