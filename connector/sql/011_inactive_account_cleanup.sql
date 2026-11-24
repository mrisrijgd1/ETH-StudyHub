-- Privacy rule (decided by Mridul, 24 Nov 2026): accounts with no sign-in for 2 years are deleted.
-- "No sign-in" means: no login on the site AND no session used or refreshed (this also covers people who
-- only use StudyHub through the AI connector). Deleting the auth user removes everything linked to it,
-- because every StudyHub table references auth.users with ON DELETE CASCADE (same as "Delete my account").
-- Admin accounts (public.admins) are kept so moderation never disappears.
-- Runs once a day at 03:17 UTC via pg_cron. Safe to re-run: this file is applied on every connector deploy.

create extension if not exists pg_cron;

create or replace function public.delete_inactive_accounts()
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  n integer;
begin
  with gone as (
    delete from auth.users u
    where coalesce(u.last_sign_in_at, u.created_at) < now() - interval '2 years'
      and not exists (
        select 1 from auth.sessions s
        where s.user_id = u.id
          and coalesce(s.refreshed_at::timestamptz, s.updated_at, s.created_at) > now() - interval '2 years'
      )
      and not exists (select 1 from public.admins a where a.user_id = u.id)
    returning 1
  )
  select count(*) into n from gone;
  return n;
end;
$$;

revoke all on function public.delete_inactive_accounts() from public, anon, authenticated;

-- (Re)create the daily job under a fixed name.
do $$
begin
  perform cron.unschedule(jobid) from cron.job where jobname = 'studyhub-delete-inactive-accounts';
  perform cron.schedule('studyhub-delete-inactive-accounts', '17 3 * * *', 'select public.delete_inactive_accounts()');
end;
$$;
