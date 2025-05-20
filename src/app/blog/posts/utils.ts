import { Post as LocalPost } from "./types";

export function getPostBySlug(
  slug: string,
  posts: LocalPost[]
): LocalPost | undefined {
  const post = posts.find((post) => post.slug === slug);
  return post;
}

export function getRelatedPosts(
  currentPost: LocalPost,
  posts: LocalPost[],
  limit = 3
): LocalPost[] {
  return posts
    .filter((post) => post.slug !== currentPost.slug)
    .sort((a, b) => {
      const aTags = new Set(a.tags || []);
      const bTags = new Set(b.tags || []);
      const aMatch = [...aTags].filter((tag) =>
        currentPost.tags?.includes(tag)
      ).length;
      const bMatch = [...bTags].filter((tag) =>
        currentPost.tags?.includes(tag)
      ).length;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}
