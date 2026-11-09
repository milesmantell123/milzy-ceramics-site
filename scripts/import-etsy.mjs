// Rebuilds src/data/pieces.json (and the card photos in public/pieces/)
// from an export of the Etsy shop.
//
//   node scripts/import-etsy.mjs <listings-full.json> <folder of listing photos>
//
// The photo folder holds files named <listing_id>_<rank>.jpg, as written by
// the Etsy audit export. Website names are made here from each Etsy title:
// a short form name ("Tall Mug", "Matcha Bowl") plus a named surface
// ("Tidepool", "Oribe"). To rename a piece by hand, add it to
// src/data/name-overrides.json and run the import again.
import fs from 'node:fs';
import path from 'node:path';

const [, , listingsPath, imgDir] = process.argv;
if (!listingsPath) {
  console.error('Usage: node scripts/import-etsy.mjs <listings-full.json> [photo folder]');
  process.exit(1);
}

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const raw = fs.readFileSync(listingsPath, 'utf8').replace(/^﻿/, '');
const listings = JSON.parse(raw);
const overridesPath = path.join(root, 'src/data/name-overrides.json');
const overrides = fs.existsSync(overridesPath) ? JSON.parse(fs.readFileSync(overridesPath, 'utf8')) : {};

// Form name, category, checked in order against the Etsy title.
const FORMS = [
  [/shot glass/i, 'Shot Cup', 'Objects'],
  [/ashtray/i, 'Ashtray', 'Objects'],
  [/platter/i, 'Fruit Platter', 'Bowls'],
  [/lidded jar/i, 'Lidded Jar', 'Vases & Jars'],
  [/canister/i, 'Canister', 'Vases & Jars'],
  [/bud vase/i, 'Bud Vase', 'Vases & Jars'],
  [/tall .*vase/i, 'Tall Vase', 'Vases & Jars'],
  [/small .*vase/i, 'Small Vase', 'Vases & Jars'],
  [/vase/i, 'Flower Vase', 'Vases & Jars'],
  [/cappuccino/i, 'Cappuccino Mug', 'Mugs'],
  [/faceted.*mug/i, 'Faceted Mug', 'Mugs'],
  [/tall .*mug/i, 'Tall Mug', 'Mugs'],
  [/short .*mug/i, 'Short Mug', 'Mugs'],
  [/teabowl|matcha/i, 'Matcha Bowl', 'Cups & Tea'],
  [/tea bowl/i, 'Tea Bowl', 'Cups & Tea'],
  [/yunomi/i, 'Yunomi', 'Cups & Tea'],
  [/handleless/i, 'Handleless Cup', 'Cups & Tea'],
  [/ceramic tumbler/i, 'Tumbler', 'Cups & Tea'],
  [/faceted.*(cup|tumbler)/i, 'Faceted Cup', 'Cups & Tea'],
  [/espresso/i, 'Espresso Cup', 'Cups & Tea'],
  [/tea cup/i, 'Tea Cup', 'Cups & Tea'],
  [/mug/i, 'Mug', 'Mugs'],
  [/serving bowl/i, 'Serving Bowl', 'Bowls'],
  [/shallow .*bowl/i, 'Shallow Dish', 'Bowls'],
  [/small .*bowl/i, 'Small Bowl', 'Bowls'],
  [/bowl/i, 'Bowl', 'Bowls'],
  [/cup/i, 'Cup', 'Cups & Tea'],
];

// Named surfaces, most distinctive first. The first colour word found in
// the title decides the surface; bare orange flashing, amber and brown
// are "Ember".
const SURFACES = [
  ['tidepool', /turquoise|teal|ice blue|blue green/i],
  ['cobalt', /cobalt|blue/i],
  ['oribe', /olive|green|sage|oribe/i],
  ['bone', /white|cream/i],
  ['char', /black/i],
  ['ash', /grey|gray|ash/i],
];

const GLAZES = ['Saint John’s Black', "Saint John's Black", 'Marie Woo Blue', 'Impressionist Purple', 'Shino', 'CM Blue', 'Oribe'];

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function colourPart(title) {
  // Etsy titles end with the colours, e.g. "..., Orange, Grey and Blue".
  const parts = title.split(',').map((s) => s.trim()).filter(Boolean);
  const colourish = /orange|rust|white|cream|black|blue|green|olive|grey|gray|teal|turquoise|amber|brown|peach|copper|sage|ash/i;
  const tail = parts.filter((p) => colourish.test(p) && !/stoneware|handmade|soda/i.test(p));
  if (tail.length) return tail.join(', ');
  // Older titles: "Rust Orange and Cream White, Soda Fired Stoneware".
  const m = title.match(/((?:rust|orange)[^,(]*)/i);
  return m ? m[1].trim() : '';
}

function niceFinish(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\(.*?\)/g, '')
    .replace(/\b(stoneware|cup|glaze)\b/gi, '')
    .replace(/\s+/g, ' ')
    .replace(/\b(\w)/g, (c) => c.toLowerCase())
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/,\s*and/g, ' and')
    .trim();
}

function paragraphs(desc) {
  return desc
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !/^[-•]/.test(p) && !/^details$/i.test(p) && !/packed carefully|exact (one|piece)|you get the exact/i.test(p));
}

function sizeLine(desc) {
  const lines = desc.split('\n').map((l) => l.replace(/^[\s\-•\t]+/, '').trim());
  const hits = lines.filter((l) => /^about|in\.? tall|in tall|opening|holds|measures|\boz\b/i.test(l) && l.length < 90 && !/safe/i.test(l));
  return hits.length ? hits.join('; ').replace(/\s+/g, ' ') : undefined;
}

const keep = listings.filter((l) => (l.state === 'active' || l.state === 'sold_out') && /ceramic|stoneware|pottery/i.test(l.title));
keep.sort((a, b) => a.created_timestamp - b.created_timestamp || a.listing_id - b.listing_id);

const used = new Map();
const outDir = path.join(root, 'public/pieces');
fs.mkdirSync(outDir, { recursive: true });

const pieces = keep.map((l, i) => {
  const form = FORMS.find(([re]) => re.test(l.title)) ?? [null, 'Piece', 'Objects'];
  const colours = colourPart(l.title);
  const searchText = colours || l.description.slice(0, 300);
  const surface = (SURFACES.find(([, re]) => re.test(searchText)) ?? ['ember'])[0];
  const o = overrides[l.listing_id] ?? {};
  const name = o.name ?? form[1];
  const base = slugify(`${name} ${surface}`);
  const n = (used.get(base) ?? 0) + 1;
  used.set(base, n);
  const slug = n === 1 ? base : `${base}-${n}`;

  const paras = paragraphs(l.description);
  let description = paras.slice(0, 2).join('\n\n').replace(/^Handmade\s+/i, '');
  description = description.charAt(0).toUpperCase() + description.slice(1);
  const glaze = GLAZES.find((g) => l.description.includes(g));
  const notFood = /not food safe/i.test(l.description);

  const images = [...l.images].sort((a, b) => a.rank - b.rank);
  const local = [];
  for (const [k, img] of images.slice(0, 2).entries()) {
    const src = imgDir && path.join(imgDir, `${l.listing_id}_${img.rank}.jpg`);
    if (src && fs.existsSync(src)) {
      const file = `${slug}-${k + 1}.jpg`;
      fs.copyFileSync(src, path.join(outDir, file));
      local.push(`/pieces/${file}`);
    }
  }

  return {
    id: l.listing_id,
    slug,
    number: String(i + 1).padStart(3, '0'),
    name,
    category: o.category ?? form[2],
    surface: o.surface ?? surface,
    finish: niceFinish(colours) || 'Soda fired stoneware',
    price: l.price,
    sold: l.state === 'sold_out' || l.quantity === 0,
    etsy: `https://www.etsy.com/listing/${l.listing_id}`,
    etsyTitle: l.title.replace(/\s+/g, ' ').trim(),
    description,
    size: sizeLine(l.description),
    interior: glaze ? glaze.replace("'", '’') : undefined,
    care: notFood
      ? 'Not for direct food use. Lovely for whole fruit or display. Hand wash.'
      : 'Food, microwave and dishwasher safe. Hand washing keeps it looking its best.',
    cards: local,
    images: images.map((img) => img.url_fullxfull.replace(/il_fullxfull/g, 'il_1080xN')),
    created: l.created_timestamp,
    tags: l.tags ?? [],
  };
});

fs.writeFileSync(path.join(root, 'src/data/pieces.json'), JSON.stringify(pieces, null, 2) + '\n');
const count = (k) => pieces.reduce((m, p) => ((m[p[k]] = (m[p[k]] ?? 0) + 1), m), {});
console.log(`${pieces.length} pieces (${pieces.filter((p) => p.sold).length} sold)`);
console.log(count('category'));
console.log(count('surface'));
console.log(count('name'));
