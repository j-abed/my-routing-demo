import Link from "next/link";
import { posts } from "@/lib/data";

export default function BlogIndex() {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <p>Each link routes to <code>app/blog/[slug]/page.tsx</code>.</p>
    </>
  );
}