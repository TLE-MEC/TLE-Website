import client from "./sanity";

const EVENTS_QUERY = '*[_type == "event"] | order(id asc)';

export async function getEvents() {
  const events = await client.fetch(EVENTS_QUERY);
  return events.filter((event) => event && event.name);
}