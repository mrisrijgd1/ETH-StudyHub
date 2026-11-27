# Study places in Zürich (planner map)

The map of study places the planner opens as its own tab ("🗺 Study places", or `plan.html#places`) and as a picker
wherever a student chooses a place ("Choose on the map" in the week view).

- `index.html`, `study-spaces.json`, `basemap.geojson`, `img/` come from the project's study-spaces work and are
  copied in with `python3 tools/sync-study-spaces.py <folder>`. Don't edit them here; change them at the source and sync.
- `bridge.js` is StudyHub's addition: the "Choose this place for my plan" button (pick mode, `?pick=1`) and live occupancy.
- Live occupancy for ETH rooms comes from ETH's public traffic light
  (https://ethz.ch/studierende/de/campus/arbeitsplaetze-studierende/auslastung-studierendenarbeitsplaetze.html) through
  `api/occupancy.php`, which fetches ETH's feed at most every 5 minutes and passes on only room id, status, percentage,
  trend and time. Every view links to ETH's page.
- The page makes no requests to other sites: Leaflet is served from here, Google Fonts are dropped.

## Licences
- Leaflet 1.9.4 (`leaflet-1.9.4.min.js`): © 2010–2023 Volodymyr Agafonkin, © 2010–2011 CloudMade. BSD 2-Clause licence.
- Map data (`basemap.geojson`, coordinates): © OpenStreetMap contributors, ODbL.
- Photos in `img/`: Wikimedia Commons, licence and credit stored with each photo in `study-spaces.json` and shown under it.
  ETH's official study-space photos are left out until ETH agrees to their use.
