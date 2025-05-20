import { Post } from ".contentlayer/generated";

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentPost: Post, limit = 3): Post[] {
  return allPosts
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
