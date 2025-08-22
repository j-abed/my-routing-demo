import { notFound } from "next/navigation";
import { products } from "@/lib/data";

export default function ProductPage({
  params,
}: { params: { category: string; slug: string } }) {
  const item = products.find(p => p.category === params.category && p.slug === params.slug);
  if (!item) return notFound();
  return (
    <>
      <h1>{item.name}</h1>
      <p><strong>Category:</strong> {params.category} — <strong>Slug:</strong> <code>{params.slug}</code></p>
      <p>This page demonstrates multiple dynamic segments.</p>
    </>
  );
}
