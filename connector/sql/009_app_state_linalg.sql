-- Linear Algebra flashcards: allow the app name 'linalg' in public.app_state (synced key studyhub-linalg-flashcards-v1).
-- Same table, policies and size limit as 008; only the list of app names grows. Safe to rerun.
alter table public.app_state drop constraint if exists app_state_app_check;
alter table public.app_state add constraint app_state_app_check check (app in ('dive','chemie','flashcards','linalg'));
