export default {
  name: "coreMember",
  title: "Core / Exec member",
  type: "object",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() },
    { name: "title", title: "Role / Title", type: "string" },
    {
      name: "image",
      title: "Photo (upload)",
      type: "image",
      options: { hotspot: true },
      description: "Prefer uploading here. Falls back to Image URL below if empty.",
    },
    {
      name: "imageUrl",
      title: "Image URL (fallback)",
      type: "url",
      description: "Used when no uploaded photo is set (e.g. existing Cloudinary URL).",
    },
    { name: "linkedIn", title: "LinkedIn URL", type: "url" },
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "image" },
  },
};
