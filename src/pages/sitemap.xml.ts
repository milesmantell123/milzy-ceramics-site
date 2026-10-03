import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { articles } from '../data/articles';

export const GET: APIRoute = ({ site }) => {
  const paths = [
    '/',
    '/collection/',
    ...products.map((p) => `/collection/${p.slug}/`),
    '/learn/',
    ...articles.map((a) => `/learn/${a.slug}/`),
    '/studio/',
    '/care/',
    '/contact/',
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
