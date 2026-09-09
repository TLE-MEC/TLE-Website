/**
 * Sanity Studio mounted at the `/studio` route of the website
 * (same approach as the FOSSMEC website: NextStudio there,
 * static `sanity build` output served under /studio here).
 */
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schema/index";

export default defineConfig({
  name: "default",
  title: "TLE MEC Studio",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    // Vision lets editors run GROQ queries from inside the Studio.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
