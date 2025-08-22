// app/layout.tsx
import Link from "next/link";
import "./globals.css"; // optional

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/products/shoes/nike-pegasus-40">Nested Slug</Link>
              <Link href="/docs/getting-started">Docs (catch-all)</Link>
              <Link href="/docs-optional">Docs (optional)</Link>
              <Link href="/api/hello">API: /api/hello</Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer>
            <small>Shared layout is wrapping all routes.</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
// This layout component wraps all pages in the application, providing a consistent header and footer.  