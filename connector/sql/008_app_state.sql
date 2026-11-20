-- App state synced to the account: Exam Dive history + bests, Chemie course state, flashcards app state.
-- One row per user and app; the browser keeps working without it (guests stay local). Safe to rerun.
create table if not exists public.app_state (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  app text not null check (app in ('dive','chemie','flashcards')),
  data jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, app),
  check (pg_column_size(data) < 300000)
);
alter table public.app_state enable row level security;
drop policy if exists "own app state: read" on public.app_state;
drop policy if exists "own app state: write" on public.app_state;
create policy "own app state: read"  on public.app_state for select to authenticated using (user_id = auth.uid());
create policy "own app state: write" on public.app_state for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
grant select, insert, update, delete on public.app_state to authenticated;
