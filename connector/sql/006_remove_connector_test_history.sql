-- One-off cleanup (15 Nov 2026, asked by Srish): remove the plan-history entries Claude created on
-- 14 Nov while testing the connector's write/undo/restore/reset tools. Matches only the 'plan' versions
-- of the account that holds the test line, inside the one minute of the test; safe to rerun.
-- (005's admin seed already ran, so the admins row stays.)
with tester as (
  select distinct user_id from public.my_versions
  where key = 'plan' and content->>'text' = 'Connector test line (Claude), will be removed.'
)
delete from public.my_versions v
using tester t
where v.user_id = t.user_id
  and v.key = 'plan'
  and v.created_at >= '2026-11-14 13:45:00+00' and v.created_at < '2026-11-14 13:46:00+00';
