const { createClient } = require("@sanity/client");
const c = createClient({
  projectId: "48h0kfui",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
c.fetch('*[_type == "event"] | order(id asc) { name, id, isUpcoming }')
  .then((r) => console.log("FETCH OK, count:", r.length))
  .catch((e) => console.error("FETCH ERR:", e.message));