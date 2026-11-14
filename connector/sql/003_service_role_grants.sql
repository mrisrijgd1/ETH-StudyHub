-- The connector's server writes with the service_role key. New Supabase projects no longer grant
-- table rights to service_role automatically, so item_state / attempts / results / mocks failed with
-- "permission denied". Grant them explicitly (idempotent).
grant usage on schema public to service_role;
grant select, insert, update, delete on public.item_state, public.attempts, public.results, public.mocks,
  public.my_items, public.my_versions, public.progress to service_role;
grant usage, select on all sequences in schema public to service_role;
