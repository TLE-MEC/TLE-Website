# TLE MEC Studio

Sanity Studio for the TLE website (events, team years, resources/reports, shortlinks).
Same approach as the FOSSMEC website: one repo, one install, Studio mounted at
`/studio` and deployed along with the frontend.

## Setup

```bash
cp .env.example .env   # root .env holds both REACT_APP_* and SANITY_STUDIO_* vars
npm install
npm run studio         # Studio dev server → http://localhost:3333/studio
npm start              # website dev server
```

`sanity/env.js` is the single place the Studio reads project/dataset from.

## The Studio on the live site (/studio)

`npm run build` builds the website and then the Studio into `build/studio/`
(`build:studio` script + `scripts/fix-studio-paths.js`, which rewrites the
Studio's root-absolute `/static/*` asset URLs to `/studio/static/*` so they
don't clash with the frontend's own `/static/*` files). `vercel.json` routes
`/studio/*` to the Studio and everything else to the website SPA.

## Import seed data

```bash
npx sanity dataset import sanity/seed/teamYears.ndjson production --replace
npx sanity dataset import sanity/seed/resources.ndjson production --replace
# shortlinks sample (edit refs first):
# npx sanity dataset import sanity/seed/shortlinks.sample.ndjson production --replace
```

(For these CLI commands, `npx sanity login` first — no token file needed.)

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

## Who can sign in

Sanity has no username/password login. Sign-in is via **Google or GitHub**
account, controlled by project membership:

1. Go to [sanity.io/manage](https://www.sanity.io/manage) → project
   `48h0kfui` → **Members** → **Invite member**.
2. Enter the editor's email with the **Editor** role
   (can create/edit/publish, can't change project settings).
3. They open `<site>/studio` and sign in with Google/GitHub using that email.

Remove someone the same way (Members → … → Remove) to revoke access.
