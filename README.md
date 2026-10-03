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

### Adding a photograph to a piece

1. Put the photo in `public/images/`, for example `public/images/faceted-mug-04.jpg`. Aim for about 2000px on the long side, saved as JPG or WebP under 400 KB.
2. In `src/data/products.ts`, add `image: '/images/faceted-mug-04.jpg',` to that piece.

Until a piece has a photo, the site shows a simple drawing of its form in its colours.

## Hosting

The `dist/` folder can be hosted on Netlify, Cloudflare Pages or Vercel for free. Connect this repository, use `npm run build` as the build command and `dist` as the output folder. Then update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the real domain.
