# Milzy Ceramics

The website for Milzy Ceramics: soda fired stoneware, handmade in Southern California.

Built with [Astro](https://astro.build) as a fast static site. Every page is plain HTML and CSS, with a few lines of JavaScript for the menu and fade-ins.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the finished site to dist/
```

## Where things live

| What | File |
|---|---|
| Pieces, prices and Etsy links | `src/data/products.ts` |
| Reviews shown on the home page | `src/data/reviews.ts` |
| Learn essays | `src/data/articles.ts` and `src/pages/learn/` |
| Colours and type | `src/styles/global.css` |
| Photographs | `public/images/` |

### Photographs

Each piece's `images` list in `src/data/products.ts` points at its photos on Etsy's image server, so they are the same photos as the Etsy listing. The first is the cover; the rest appear on the piece's page.

To use your own file instead, put it in `public/images/` (about 2000px on the long side, JPG or WebP under 400 KB) and add `'/images/your-file.jpg'` to the list.

A piece with no photos shows a simple drawing of its form in its colours.

## Hosting

The `dist/` folder can be hosted on Netlify, Cloudflare Pages or Vercel for free. Connect this repository, use `npm run build` as the build command and `dist` as the output folder. Then update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the real domain.
