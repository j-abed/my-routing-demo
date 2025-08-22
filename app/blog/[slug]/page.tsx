import { notFound } from "next/navigation";
import { posts } from "@/lib/data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const post = posts.find(p => p.slug === awaitedParams.slug);
  if (!post) return notFound();
  return (
    <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 10, boxShadow: "var(--card-shadow)", padding: 24, marginTop: 18 }}>
      <h1 style={{ marginBottom: 8 }}>{post.title}</h1>
      <p style={{ color: "#64748b", marginBottom: 8 }}><em>Slug:</em> <code>{awaitedParams.slug}</code></p>
      <p style={{ fontSize: 18 }}>{post.body}</p>
    </div>
  );
}
