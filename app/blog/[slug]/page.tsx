import { notFound } from "next/navigation";
import { posts } from "@/lib/data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <>
      <h1>{post.title}</h1>
      <p><em>Slug:</em> <code>{params.slug}</code></p>
      <p>{post.body}</p>
    </>
  );
}
