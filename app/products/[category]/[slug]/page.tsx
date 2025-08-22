import { notFound } from "next/navigation";
import { products } from "@/lib/data";

export default async function ProductPage({
  params,
}: { params: { category: string; slug: string } }) {
  const awaitedParams = await params;
  const item = products.find(p => p.category === awaitedParams.category && p.slug === awaitedParams.slug);
  if (!item) return notFound();
  return (
    <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 10, boxShadow: "var(--card-shadow)", padding: 24, marginTop: 18 }}>
      <h1 style={{ marginBottom: 8 }}>{item.name}</h1>
      <p style={{ color: "#64748b", marginBottom: 8 }}><strong>Category:</strong> {awaitedParams.category} — <strong>Slug:</strong> <code>{awaitedParams.slug}</code></p>
      <p>This page demonstrates multiple dynamic segments.</p>
    </div>
  );
}
