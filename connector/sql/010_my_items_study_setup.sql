-- Sign-in setup (#192): allow the my_items key 'study_setup'. Only the list of keys grows. Safe to rerun.
alter table public.my_items drop constraint if exists my_items_key_check;
alter table public.my_items add constraint my_items_key_check check (key in ('plan','notes','questions','flashcards','design','study_setup'));
