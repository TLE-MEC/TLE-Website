import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schema/index";

// Sanity Studio v3 runs on Vite: studio vars come from import.meta.env
// (Vite auto-loads sanity/.env, exposing the SANITY_STUDIO_* prefix).
// Fall back to process.env for Node-side CLI commands.
const studioEnv =
  (typeof import.meta !== "undefined" && import.meta.env) || {};
const nodeEnv = (typeof process !== "undefined" && process.env) || {};

const projectId =
  studioEnv.SANITY_STUDIO_PROJECT_ID || nodeEnv.SANITY_STUDIO_PROJECT_ID;
const dataset =
  studioEnv.SANITY_STUDIO_DATASET ||
  nodeEnv.SANITY_STUDIO_DATASET ||
  "production";

if (!projectId) {
  throw new Error(
    "Sanity Studio requires SANITY_STUDIO_PROJECT_ID. Create a .env file in the sanity/ folder (see .env.example)."
  );
}

export default defineConfig({
  name: "default",
  title: "TLE MEC Studio",
  projectId,
  dataset,
  basePath: "/",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});