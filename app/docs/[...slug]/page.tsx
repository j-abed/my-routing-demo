export default function DocsCatchAll({ params }: { params: { slug: string[] } }) {
  return (
    <>
      <h1>Docs (catch-all)</h1>
      <p>Segments captured as array:</p>
      <pre>{JSON.stringify(params.slug, null, 2)}</pre>
    </>
  );
}
