export default {
  name: "resource",
  title: "Resource / Report",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order / ID",
      type: "number",
      description: "Used to sort resources on the website (ascending).",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    { name: "desc", title: "Description", type: "text", rows: 4 },
    {
      name: "url",
      title: "Drive link (URL)",
      type: "url",
      description: "Google Drive / external link to the report. Shown as Open button.",
    },
    {
      name: "file",
      title: "Report PDF (upload, optional)",
      type: "file",
      options: { accept: "application/pdf" },
      description: "If uploaded, this PDF is preferred over the Drive link.",
    },
  ],
  preview: { select: { title: "name" } },
  orderings: [{ title: "Order ascending", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
};
