-- One-off cleanup (14 Nov 2026, asked by Srish): remove the records Claude created while testing
-- the connector's write tools. Matches only rows explicitly labelled as a connector test; safe to rerun.
delete from public.results  where summary like 'Connector test by Claude (14 Nov)%';
delete from public.attempts where attempt like '[Connector test by Claude, 14 Nov%';
delete from public.mocks    where id = '9040169c-1a8e-48a3-87f6-13235edd6674';
