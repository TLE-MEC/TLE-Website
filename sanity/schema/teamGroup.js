export default {
  name: "teamGroup",
  title: "Team group",
  type: "object",
  fields: [
    { name: "name", title: "Team name", type: "string", validation: (Rule) => Rule.required() },
    {
      name: "members",
      title: "Members",
      type: "array",
      of: [{ type: "simpleMember" }],
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
