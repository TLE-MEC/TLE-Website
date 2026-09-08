# TLE MEC Studio

Sanity Studio for the TLE website (events, team years, resources/reports, shortlinks).

## Setup

```bash
cd sanity
cp .env.example .env
# fill in:
# SANITY_STUDIO_PROJECT_ID=48h0kfui
# SANITY_STUDIO_DATASET=production
# SANITY_AUTH_TOKEN=<token with create rights, only for dataset import>
npm install
npm run dev
```

## Import seed data

```bash
cd sanity
npx sanity dataset import seed/events.ndjson production --replace
npx sanity dataset import seed/teamYears.ndjson production --replace
npx sanity dataset import seed/resources.ndjson production --replace
# shortlinks sample (edit refs first):
# npx sanity dataset import seed/shortlinks.sample.ndjson production --replace
```

Notes:
- Team photos: current members automatically keep their local bundled photos
  (the site fills gaps from `src/data/years/*` matched by year + name).
  For future members, upload a Photo in Studio or set an Image URL —
  Sanity values always win when present.
- Events: set the **Slug** field (or leave empty — the frontend falls back
  to `/events/<id>`). Set **Registration link** to show the Register button,
  and **Report / Drive link** (or upload the PDF) to show the Report button.
- Shortlinks: create a `shortlink` doc with slug `hw` → it resolves at
  `<frontend>/s/hw` (alias `/go/hw`). Link it to an event or an external URL.
