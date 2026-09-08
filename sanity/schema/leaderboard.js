export default {
  name: "leaderboard",
  title: "Leaderboard entry",
  type: "object",
  description:
    "Use the first/second/third fields for a ranked podium, or the prize array for a flat winners list.",
  fields: [
    {
      name: "id",
      title: "Order / ID",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Track name e.g. Beginner, Intermediate (optional).",
    },
    {
      name: "first",
      title: "First place",
      type: "winner",
    },
    {
      name: "second",
      title: "Second place",
      type: "winner",
    },
    {
      name: "third",
      title: "Third place",
      type: "winner",
    },
    {
      name: "prize",
      title: "Prize winners",
      type: "array",
      of: [{ type: "winner" }],
    },
  ],
};