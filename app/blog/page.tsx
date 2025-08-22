import Link from "next/link";
import { posts } from "@/lib/data";

export default function BlogIndex() {
  return (
    <>
      <h1 style={{ marginBottom: 12 }}>Blog</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(p => (
          <li key={p.slug} style={{ marginBottom: 10 }}>
            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 16px", boxShadow: "var(--card-shadow)" }}>
              <Link href={`/blog/${p.slug}`} style={{ fontSize: 18, color: "var(--primary)", textDecoration: "none" }}>{p.title}</Link>
            </div>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: 18, color: "#64748b" }}>Each link routes to <code>app/blog/[slug]/page.tsx</code>.</p>
    </>
  );
}