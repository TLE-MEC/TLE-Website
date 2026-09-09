export default {
  name: "simpleMember",
  title: "Team member (name only)",
  type: "object",
  fields: [{ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }],
  preview: { select: { title: "name" } },
};
