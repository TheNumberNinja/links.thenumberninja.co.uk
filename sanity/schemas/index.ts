export const schemaTypes = [
  {
    title: "Linktree",
    name: "linktree",
    type: "document",
    fields: [
      {
        name: "links",
        type: "array",
        of: [
          {type: "linktree-link"},
        ],
      },
    ],
  },
  {
    title: "Linktree link",
    name: "linktree-link",
    type: "document",
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        title: "URL",
        name: "url",
        type: "url",
      },
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "url"
      }
    }
  },
];
