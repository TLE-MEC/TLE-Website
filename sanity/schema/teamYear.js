export default {
  name: "teamYear",
  title: "Team year",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Academic year",
      type: "string",
      description: 'e.g. "2026-27". Must be unique.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Higher = shown first. e.g. 2026 for 2026-27.",
    },
    {
      name: "isCurrent",
      title: "Current year",
      type: "boolean",
      description: "Only one year should be marked current.",
      initialValue: false,
    },
    {
      name: "core",
      title: "Core team",
      type: "array",
      of: [{ type: "coreMember" }],
    },
    {
      name: "teams",
      title: "Sub-teams",
      type: "array",
      of: [{ type: "teamGroup" }],
    },
    {
      name: "exec",
      title: "Ex-executive team (optional)",
      type: "array",
      of: [{ type: "coreMember" }],
    },
  ],
  preview: {
    select: { title: "year", subtitle: "isCurrent" },
    prepare({ title, subtitle }) {
      return { title: `Team ${title}`, subtitle: subtitle ? "Current year" : title };
    },
  },
  orderings: [
    { title: "Newest first", name: "orderDesc", by: [{ field: "order", direction: "desc" }] },
  ],
};
