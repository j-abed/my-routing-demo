export default async function DocsOptional({ params }: { params: { slug?: string[] } }) {
  const awaitedParams = await params;
  const parts = awaitedParams.slug ?? [];
  return (
    <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 10, boxShadow: "var(--card-shadow)", padding: 24, marginTop: 18 }}>
      <h1 style={{ marginBottom: 8 }}>Docs (optional catch-all)</h1>
      <p style={{ color: "#64748b" }}>Works at <code>/docs-optional</code> and deeper paths.</p>
      <pre>{JSON.stringify(parts, null, 2)}</pre>
    </div>
  );
}
