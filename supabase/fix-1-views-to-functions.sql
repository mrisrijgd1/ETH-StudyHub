-- Fix for the "Security Definer View" warnings: replace the three public views with
-- read-only functions. Same result (public forum + opt-in leaderboard, no account ids),
-- but the safe columns are returned by functions, which is the pattern Supabase recommends.
-- Run once in Supabase: SQL Editor -> New query -> paste -> Run.

drop view if exists public.forum_threads_public;
drop view if exists public.forum_posts_public;
drop view if exists public.leaderboard;

create or replace function public.forum_threads_list(p_topic text default null)
returns table (id bigint, topic text, title text, body text, created_at timestamptz, author text, mine boolean, replies bigint)
language sql stable security definer set search_path = '' as $$
  select t.id, t.topic, t.title, t.body, t.created_at,
         case when t.anonymous or p.nickname is null then 'anonymous' else p.nickname end,
         t.user_id = auth.uid(),
         (select count(*) from public.forum_posts r where r.thread_id = t.id)
  from public.forum_threads t left join public.profiles p on p.id = t.user_id
  where p_topic is null or t.topic = p_topic
  order by t.created_at desc
  limit 200;
$$;

create or replace function public.forum_posts_list(p_thread bigint)
returns table (id bigint, thread_id bigint, body text, created_at timestamptz, author text, mine boolean)
language sql stable security definer set search_path = '' as $$
  select r.id, r.thread_id, r.body, r.created_at,
         case when r.anonymous or p.nickname is null then 'anonymous' else p.nickname end,
         r.user_id = auth.uid()
  from public.forum_posts r left join public.profiles p on p.id = r.user_id
  where r.thread_id = p_thread
  order by r.created_at;
$$;

create or replace function public.leaderboard_list()
returns table (nickname text, pages_done bigint, active_days_30 bigint)
language sql stable security definer set search_path = '' as $$
  select p.nickname,
         count(*) filter (where g.done),
         count(distinct (g.updated_at at time zone 'UTC')::date) filter (where g.updated_at > now() - interval '30 days')
  from public.profiles p join public.progress g on g.user_id = p.id
  where p.leaderboard and p.nickname is not null
  group by p.nickname
  order by 3 desc, 2 desc
  limit 100;
$$;

revoke all on function public.forum_threads_list(text), public.forum_posts_list(bigint), public.leaderboard_list() from public;
grant execute on function public.forum_threads_list(text), public.forum_posts_list(bigint), public.leaderboard_list() to anon, authenticated;
