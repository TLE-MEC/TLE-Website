export default {
  name: "shortlink",
  title: "Shortlink",
  type: "document",
  description: "Short frontend links like /s/hello-world that redirect to an event or URL.",
  fields: [
    {
      name: "slug",
      title: "Short slug",
      type: "slug",
      description: 'The short code, e.g. "hw" for /s/hw. Lowercase, no spaces.',
      validation: (Rule) => Rule.required(),
    },
    { name: "title", title: "Title / note", type: "string" },
    {
      name: "event",
      title: "Linked event (optional)",
      type: "reference",
      to: [{ type: "event" }],
      description: "If set, /s/<slug> redirects to /events/<event slug>.",
    },
    {
      name: "url",
      title: "External URL (fallback)",
      type: "url",
      description: "Used when no event is linked.",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
};
