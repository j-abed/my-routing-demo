// app/blog/[slug]/page.tsx
export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <h1>Post: {params.slug}</h1>
      <p>
        This page matches any URL like <code>/blog/anything-here</code> because of the
        <code> [slug] </code> folder name.
      </p>
    </>
  );
}
