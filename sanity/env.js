// Central Sanity env, mirroring the upstream FOSSMEC setup.
// Read by sanity.config.js (Studio) — the website reads the same values
// from REACT_APP_SANITY_* in .env (see src/utils/sanity.js).
const studioEnv =
  (typeof import.meta !== "undefined" && import.meta.env) || {};
const nodeEnv = (typeof process !== "undefined" && process.env) || {};

export const apiVersion =
  studioEnv.SANITY_STUDIO_API_VERSION ||
  nodeEnv.SANITY_STUDIO_API_VERSION ||
  "2024-01-01";

export const dataset =
  studioEnv.SANITY_STUDIO_DATASET ||
  nodeEnv.SANITY_STUDIO_DATASET ||
  "production";

export const projectId =
  studioEnv.SANITY_STUDIO_PROJECT_ID ||
  nodeEnv.SANITY_STUDIO_PROJECT_ID ||
  "48h0kfui";
