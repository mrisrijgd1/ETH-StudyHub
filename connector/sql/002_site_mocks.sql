-- Timed mocks done on the website (mock.html) are saved by the signed-in user directly.
drop policy if exists "own mocks: insert" on public.mocks;
create policy "own mocks: insert" on public.mocks for insert to authenticated with check (user_id = auth.uid());
grant insert on public.mocks to authenticated;
