export interface PostMetadata {
  title: string;
  date: string;
  author: string;
  description: string;
  slug: string;
  tags?: string[];
}

export interface Post extends PostMetadata {
  body: {
    html: string;
    raw: string;
  };
}
