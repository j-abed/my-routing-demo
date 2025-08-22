// app/blog/page.tsx
import Link from "next/link";

const posts = [
  { slug: "my-first-post", title: "My First Post" },
  { slug: "next-routing-101", title: "Next.js Routing 101" },
];

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
      <p>
        Each link goes to a <strong>dynamic route</strong> handled by{" "}
        <code>app/blog/[slug]/page.tsx</code>.
      </p>
    </>
  );
}
// This page lists blog posts and links to their dynamic routes, which are handled by a separate file for each post.