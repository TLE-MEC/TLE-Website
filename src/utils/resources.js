import client, { fileUrl } from "./sanity";
import fallbackResources from "../data/resourceData";

function normalizeResource(raw, index = 0) {
  const uploadedUrl = raw.file?.asset?._ref
    ? fileUrl(raw.file.asset._ref)
    : raw.file?.asset?.url || "";
  return {
    id: raw.order ?? raw.id ?? index + 1,
    name: raw.name || "",
    desc: raw.desc || "",
    // Prefer uploaded PDF, fall back to the Drive link.
    url: uploadedUrl || raw.url || "",
    driveUrl: raw.url || "",
  };
}

const RESOURCES_QUERY = `*[_type == "resource"] | order(order asc) {
  order, name, desc, url, file { asset->{ _ref, url } }
}`;

export async function getResources() {
  try {
    const resources = await client.fetch(RESOURCES_QUERY);
    if (resources && resources.length > 0) {
      return resources.map(normalizeResource).filter((r) => r.name);
    }
  } catch (error) {
    console.error("Failed to load resources from Sanity:", error);
  }
  return fallbackResources;
}

export async function getShortlinkDestination(slug) {
  try {
    const result = await client.fetch(
      `*[_type == "shortlink" && slug.current == $slug][0] {
        title,
        url,
        event->{ "slug": coalesce(slug.current, ""), id, name }
      }`,
      { slug: String(slug) }
    );
    if (!result) return null;
    if (result.event?.slug) return `/events/${result.event.slug}`;
    if (result.event?.id != null) return `/events/${result.event.id}`;
    return result.url || null;
  } catch (error) {
    console.error("Failed to resolve shortlink:", error);
    return null;
  }
}
