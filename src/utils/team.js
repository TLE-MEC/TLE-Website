import client, { urlFor } from "./sanity";
import * as y2026 from "../data/years/2026_27";
import * as y2025 from "../data/years/2025_26";
import * as y2024 from "../data/years/2024_25";
import * as y2023 from "../data/years/2023_24";
import * as y2022 from "../data/years/2022_23";
import * as y2021 from "../data/years/2021_22";

export const fallbackYears = [y2026, y2025, y2024, y2023, y2022, y2021];

const fallbackByYear = Object.fromEntries(
  fallbackYears.map((y) => [y.year, y])
);

const normName = (s = "") =>
  s.toLowerCase().trim().replace(/\s+/g, " ");

// Current members keep their local bundled photos: when a Sanity member has
// no photo/uploaded image yet, fill it from the matching local year file by
// name. Sanity values always win when present, so future members added only
// in Studio (photo upload or image URL) work without code changes.
function fillGapsFromLocal(members, fallbackMembers) {
  const fb = new Map(
    (fallbackMembers || []).map((m) => [normName(m.name), m])
  );
  return members.map((m) => {
    const f = fb.get(normName(m.name));
    if (!f) return m;
    return {
      ...m,
      title: m.title || f.title || "",
      image: m.image || f.image || "",
      linkedIn: m.linkedIn || f.linkedIn || "",
    };
  });
}

function resolveMemberImage(member = {}) {
  if (member.image && typeof member.image === "object") {
    return urlFor(member.image) || member.imageUrl || "";
  }
  return member.image || member.imageUrl || "";
}

function normalizeYear(raw, index = 0) {
  const core = (raw.core || []).map((m, i) => ({
    id: i + 1,
    name: m.name || "",
    title: m.title || "",
    image: resolveMemberImage(m),
    linkedIn: m.linkedIn || "",
  }));
  const teams = (raw.teams || []).map((t) => ({
    name: t.name || "",
    members: (t.members || []).map((m) => ({ name: m.name || "" })),
  }));
  const exec = (raw.exec || []).map((m, i) => ({
    id: i + 1,
    name: m.name || "",
    title: m.title || "",
    image: resolveMemberImage(m),
    linkedIn: m.linkedIn || "",
  }));
  // Auto-slice core into rows of ~3-4 so the existing layout keeps working
  // without requiring editors to maintain slice indices in Sanity.
  const coreSlices = [];
  if (core.length > 0) {
    let start = 0;
    let first = true;
    while (start < core.length) {
      const size = first ? 3 : 4;
      coreSlices.push([start, Math.min(start + size, core.length)]);
      start += size;
      first = false;
    }
  }
  const local = fallbackByYear[raw.year];
  return {
    year: raw.year,
    isCurrent: !!raw.isCurrent,
    coreSlices,
    core: fillGapsFromLocal(core, local?.core),
    teams,
    exec: fillGapsFromLocal(exec, local?.exec),
    _order: raw.order ?? index,
  };
}

const TEAM_QUERY = `*[_type == "teamYear"] | order(order desc) {
  year, order, isCurrent,
  core[] { name, title, image, imageUrl, linkedIn },
  teams[] { name, members[] { name } },
  exec[] { name, title, image, imageUrl, linkedIn }
}`;

export async function getTeamYears() {
  try {
    const years = await client.fetch(TEAM_QUERY);
    if (years && years.length > 0) {
      return years.map(normalizeYear).filter((y) => y.year);
    }
  } catch (error) {
    console.error("Failed to load team years from Sanity:", error);
  }
  return fallbackYears;
}
