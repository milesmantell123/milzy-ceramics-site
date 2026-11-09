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
| Every piece (names, prices, sizes, Etsy links) | `src/data/pieces.json` |
| Named surfaces, categories and helpers | `src/data/products.ts` |
| Reviews shown on the home page | `src/data/reviews.ts` |
| Learn essays | `src/data/articles.ts` and `src/pages/learn/` |
| Colours and type | `src/styles/global.css` |
| Card photos for each piece | `public/pieces/` |
| Studio photos (home page, story) | `public/images/studio/` |

### Updating pieces from Etsy

`src/data/pieces.json` is made from an export of the Etsy shop:

```sh
node scripts/import-etsy.mjs path/to/listings-full.json path/to/photo-folder
```

It keeps active and sold listings, gives each a short website name ("Tall Mug", "Matcha Bowl") and a named surface (Ember, Bone, Char, Ash, Oribe, Cobalt, Tidepool), and copies the first two photos of each into `public/pieces/`. To rename a piece by hand, add it to `src/data/name-overrides.json`, keyed by Etsy listing id, for example `{ "4605252088": { "name": "Footed Mug" } }`, then run the import again.

Card photos are served from the site. The larger gallery photos on each piece page come from Etsy's image server.

### Newsletter

Paste a signup form address (Buttondown, Kit or Mailchimp) into `NEWSLETTER_ACTION` in `src/components/Footer.astro` and the footer shows an email signup. Until then it links to the Etsy shop.

## Hosting

The `dist/` folder can be hosted on Netlify, Cloudflare Pages or Vercel for free. Connect this repository, use `npm run build` as the build command and `dist` as the output folder. Then update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the real domain.
