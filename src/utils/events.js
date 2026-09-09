import client, { urlFor, fileUrl } from "./sanity";
import fallbackEvents from "../data/eventData";

export function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function eventSlug(event) {
  if (!event) return "";
  if (typeof event.slug === "string" && event.slug) return event.slug;
  if (event.slug?.current) return event.slug.current;
  if (event.id !== undefined && event.id !== null) return String(event.id);
  return slugify(event.name || "");
}

export function eventShareUrl(event) {
  const slug = eventSlug(event);
  const base =
    typeof window !== "undefined" ? window.location.origin : "";
  return slug ? `${base}/events/${slug}` : `${base}/events`;
}

export function normalizeEvent(raw) {
  if (!raw) return null;
  const slug =
    typeof raw.slug === "string"
      ? raw.slug
      : raw.slug?.current || (raw.id != null ? String(raw.id) : slugify(raw.name || ""));
  // Sanity image fields may be image objects; frontend historically used URL strings.
  const image =
    typeof raw.image === "string"
      ? raw.image
      : raw.image
        ? urlFor(raw.image)
        : "";
  const dialog_img =
    typeof raw.dialog_img === "string"
      ? raw.dialog_img
      : raw.dialog_img
        ? urlFor(raw.dialog_img)
        : image;
  const reportFileUrl = raw.reportFile?.asset?._ref
    ? fileUrl(raw.reportFile.asset._ref)
    : typeof raw.reportFile === "string"
      ? raw.reportFile
      : "";
  return {
    ...raw,
    _id: raw._id || `event-${raw.id ?? slug}`,
    slug,
    image,
    dialog_img,
    reportUrl: raw.reportUrl || "",
    reportFileUrl,
  };
}

const EVENTS_QUERY = `*[_type == "event"] | order(id asc) {
  _id, id, isUpcoming, name, desc, date,
  "slug": coalesce(slug.current, ""),
  image, dialog_img,
  youtube, github, link, participants,
  reportUrl, reportFile { asset->{ _ref, url } },
  leaderboard
}`;

export async function getEvents() {
  try {
    const events = await client.fetch(EVENTS_QUERY);
    const normalized = (events || [])
      .map(normalizeEvent)
      .filter((event) => event && event.name);
    if (normalized.length > 0) return normalized;
  } catch (error) {
    console.error("Failed to load events from Sanity:", error);
  }
  // Fallback so the site still renders when Sanity is unreachable.
  return fallbackEvents.map(normalizeEvent).filter((e) => e && e.name);
}

export async function getEventBySlug(slug) {
  const all = await getEvents();
  return all.find((e) => eventSlug(e) === String(slug)) || null;
}
