export type Post = { slug: string; title: string; body: string };
export const posts: Post[] = [
  { slug: "my-first-post", title: "My First Post", body: "Hello world!" },
  { slug: "next-routing-101", title: "Next.js Routing 101", body: "Routing basics." },
  { slug: "why-slugs-matter", title: "Why Slugs Matter", body: "Stable URLs FTW." }
];

export type Product = { category: string; slug: string; name: string; blurb?: string };
export const products: Product[] = [
  { category: "shoes", slug: "nike-pegasus-40", name: "Nike Pegasus 40" },
  { category: "hats", slug: "va-cap", name: "Velocity Advisors Cap" }
];
