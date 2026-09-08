export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Order / ID",
      type: "number",
      description: "Used to sort events on the website (ascending).",
    },
    {
      name: "isUpcoming",
      title: "Upcoming event",
      type: "boolean",
      description: "Toggles the event between the Upcoming and Past sections.",
      initialValue: false,
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      rows: 6,
    },
    {
      name: "image",
      title: "Card image URL",
      type: "url",
      description: "Thumbnail shown on the event card.",
    },
    {
      name: "dialog_img",
      title: "Dialog image URL",
      type: "url",
      description: "Large banner shown in the event modal.",
    },
    {
      name: "date",
      title: "Display date",
      type: "string",
      placeholder: "e.g. 8th September 2026",
    },
    {
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    },
    {
      name: "github",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "link",
      title: "Registration link",
      type: "url",
    },
    {
      name: "participants",
      title: "Participants",
      type: "number",
    },
    {
      name: "leaderboard",
      title: "Leaderboard",
      type: "array",
      of: [{ type: "leaderboard" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "date",
    },
  },
  orderings: [
    {
      title: "Order / ID ascending",
      name: "idAsc",
      by: [{ field: "id", direction: "asc" }],
    },
  ],
};