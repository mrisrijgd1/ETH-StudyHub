-- 24 Nov 2026 (Mridul's decision): all StudyHub data now lives in our own database at Infomaniak (Switzerland).
-- Supabase only does the login. This empties the old copies here and closes the tables, so nothing can be
-- written to them again (for example by a browser that still has an old version of the site loaded).
-- Kept: auth (logins), public.admins (only user ids, needed so the 2-year clean-up never removes admins),
-- storage (course files, Exam Dive question bank). Runs on every connector deploy; safe to repeat.

truncate table public.forum_posts, public.forum_threads, public.progress, public.profiles,
  public.my_versions, public.my_items, public.item_state, public.attempts, public.results, public.mocks,
  public.suggestions, public.dive_runs, public.app_state;

revoke all on public.forum_posts, public.forum_threads, public.progress, public.profiles,
  public.my_versions, public.my_items, public.item_state, public.attempts, public.results, public.mocks,
  public.suggestions, public.dive_runs, public.app_state
  from anon, authenticated, service_role;
