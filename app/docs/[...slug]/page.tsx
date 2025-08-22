export default function DocsCatchAll({ params }: { params: { slug: string[] } }) {
  return (
    <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 10, boxShadow: "var(--card-shadow)", padding: 24, marginTop: 18 }}>
      <h1 style={{ marginBottom: 8 }}>Docs (catch-all)</h1>
      <p style={{ color: "#64748b" }}>Segments captured as array:</p>
      <pre>{JSON.stringify(params.slug, null, 2)}</pre>
    </div>
  );
}
