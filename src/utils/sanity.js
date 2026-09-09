import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_DATASET || "production";

if (!projectId && process.env.NODE_ENV !== "test") {
  // eslint-disable-next-line no-console
  console.warn(
    "Sanity project ID missing. Set REACT_APP_SANITY_PROJECT_ID in .env (see .env.example)."
  );
}

const client = createClient({
  projectId: projectId || "48h0kfui",
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return "";
  try {
    return builder.image(source).url();
  } catch {
    return "";
  }
}

export function fileUrl(ref) {
  if (!ref) return "";
  // Sanity file refs look like: file-<hash>-<ext>
  if (typeof ref === "string" && ref.startsWith("file-")) {
    const [, id, ext] = ref.split("-");
    return `https://cdn.sanity.io/files/${client.config().projectId}/${
      client.config().dataset
    }/${id}.${ext}`;
  }
  return ref?.url || ref || "";
}

export default client;
