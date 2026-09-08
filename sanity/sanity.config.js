import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schema/index";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

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