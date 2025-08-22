export default function DocsOptional({ params }: { params: { slug?: string[] } }) {
  const parts = params.slug ?? [];
  return (
    <>
      <h1>Docs (optional catch-all)</h1>
      <p>Works at <code>/docs-optional</code> and deeper paths.</p>
      <pre>{JSON.stringify(parts, null, 2)}</pre>
    </>
  );
}
