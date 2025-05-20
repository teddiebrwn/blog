import Link from "next/link";
import { Post } from ".contentlayer/generated";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block p-4 transition-colors rounded-lg hover:bg-accent"
    >
      <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
      <div className="text-sm text-muted-foreground">
        <time>{post.date}</time> · {post.author}
      </div>
      <p className="mt-2 text-muted-foreground">{post.description}</p>
    </Link>
  );
}
