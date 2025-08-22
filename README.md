# My Routing Demo

This project is a demo of advanced routing using [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing).

## Project Structure

- `app/` — Main application routes (including nested, dynamic, and API routes)
- `public/` — Static assets
- `package.json` — Project dependencies and scripts

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.


## Routing Features & Playground

- Static and dynamic routes (e.g., `/blog/[slug]`)
- Nested routes (e.g., `/about`)
- API routes (e.g., `/api/hello`)
- Multi-segment dynamic routes (e.g., `/products/[category]/[slug]`)
- Catch-all routes (e.g., `/docs/[...slug]`)
- Optional catch-all routes (e.g., `/docs-optional/[[...slug]]`)

### Slug Playground: Try these routes

| Route | Description |
|-------|-------------|
| `/blog` | Blog index, links to all posts |
| `/blog/my-first-post` | Blog post (static param) |
| `/blog/next-routing-101` | Blog post (static param) |
| `/products/shoes/nike-pegasus-40` | Product page (nested dynamic) |
| `/docs/getting-started` | Docs catch-all |
| `/docs/guides/auth/jwt` | Docs catch-all (multi-segment) |
| `/docs-optional` | Docs optional catch-all (root) |
| `/docs-optional/intro/overview` | Docs optional catch-all (deep) |
| `/blog/unknown-slug` | Should show 404 (static params only) |

See `docs/slug-playground.md` for a quick smoke test reference.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Docs](https://nextjs.org/docs/app/building-your-application/routing)

---
# Routing Explained  
## “In Next.js, your folder structure is your router.”  
Every folder under app/ becomes a URL segment. Put a page.tsx in a folder to make that segment routable.

## Static vs. dynamic segments:  
A plain folder like about/ gives you /about.
A bracketed folder like [slug]/ gives you /anything and exposes params.slug.

## Nested layouts:  
A layout.tsx wraps all the pages beneath it, so shared nav/footers live once and apply everywhere.

## APIs live beside pages: 
app/api/.../route.ts files create server endpoints like /api/hello.  

If you’re still on the Pages Router, the idea is similar but files live under pages/ (e.g., pages/index.tsx, pages/about.tsx, pages/blog/[slug].tsx) and API routes live under pages/api/*.ts. The App Router just adds layouts, data-fetching conventions, and more powerful routing primitives.

If you want, I can package this into a tiny starter repo or extend it with catch-all routes ([...parts]), route groups ((marketing)), and loading/error states.
