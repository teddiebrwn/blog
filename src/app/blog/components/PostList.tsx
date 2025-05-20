import { Post, allPosts } from ".contentlayer/generated";
import { PostCard } from "./PostCard";

export function PostList() {
  const posts = allPosts.sort(
    (a: Post, b: Post) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
