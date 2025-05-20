import { getPostBySlug, getRelatedPosts } from "./utils";
import { Post } from "./types";

const posts: Post[] = [
  {
    title: "A",
    date: "2024-01-01",
    author: "X",
    description: "desc",
    slug: "a",
    tags: ["tag1", "tag2"],
    body: { html: "", raw: "" },
  },
  {
    title: "B",
    date: "2024-01-02",
    author: "Y",
    description: "desc",
    slug: "b",
    tags: ["tag2", "tag3"],
    body: { html: "", raw: "" },
  },
];

describe("getPostBySlug", () => {
  it("returns undefined if not found", () => {
    expect(getPostBySlug("not-exist", posts)).toBeUndefined();
  });
  it("returns correct post if found", () => {
    expect(getPostBySlug("a", posts)).toEqual(posts[0]);
  });
});

describe("getRelatedPosts", () => {
  it("returns empty if no related", () => {
    expect(getRelatedPosts(posts[0], [posts[0]], 1)).toEqual([]);
  });
  it("respects limit", () => {
    expect(getRelatedPosts(posts[0], posts, 0)).toEqual([]);
  });
  it("returns related posts up to limit", () => {
    expect(getRelatedPosts(posts[0], posts, 2)).toEqual([posts[1]]);
  });
});
