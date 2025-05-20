import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `src/content/blog/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: false },
    author: { type: "string", required: false },
    slug: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: ".",
  documentTypes: [Post],
});
