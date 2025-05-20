import { notFound } from "next/navigation";
import { Post, allPosts } from ".contentlayer/generated";

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((post: Post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
        <div className="text-muted-foreground">
          <time>{post.date}</time> · {post.author}
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
}
