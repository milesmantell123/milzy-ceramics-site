// Every piece on the site. The list itself lives in pieces.json, which is
// made from the Etsy shop by scripts/import-etsy.mjs. Card photos are in
// public/pieces/; the larger gallery photos are served by Etsy.
import pieces from './pieces.json';

export type Category = 'Mugs' | 'Cups & Tea' | 'Bowls' | 'Vases & Jars' | 'Objects';
export type SurfaceId = 'ember' | 'bone' | 'char' | 'ash' | 'oribe' | 'cobalt' | 'tidepool';

export interface Product {
  id: number;
  slug: string;
  number: string;
  name: string;
  category: Category;
  surface: SurfaceId;
  finish: string;
  price: number;
  sold: boolean;
  etsy: string;
  etsyTitle: string;
  description: string;
  size?: string;
  interior?: string;
  care: string;
  // Local photos for cards: the cover, then the one shown on hover.
  cards: string[];
  // Every listing photo, larger, for the piece page.
  images: string[];
  created: number;
  tags: string[];
}

export interface Surface {
  id: SurfaceId;
  name: string;
  swatch: string;
  tagline: string;
  about: string;
}

// The named surfaces, the way a glaze line is named. Every piece starts as
// the same white flashing stoneware; the fire and one or two glazes decide
// which surface it becomes.
export const surfaces: Surface[] = [
  {
    id: 'ember',
    name: 'Ember',
    swatch: '#b45a2e',
    tagline: 'Bare clay, lit by the flame',
    about:
      'The clay left as the fire found it. Where the flame and soda vapour wrapped the pot, the white stoneware turns to rust, copper and amber.',
  },
  {
    id: 'bone',
    name: 'Bone',
    swatch: '#e8dfcf',
    tagline: 'Quiet white, warm edges',
    about:
      'A soft white glaze against rust flashing. Calm on the table, and the best way to see the colour of whatever you pour into it.',
  },
  {
    id: 'char',
    name: 'Char',
    swatch: '#26221f',
    tagline: 'Deep, glossy black',
    about:
      'A deep black glaze, often Saint John’s Black, set inside or against the orange of the fire. The most dramatic contrast in the studio.',
  },
  {
    id: 'ash',
    name: 'Ash',
    swatch: '#9c968d',
    tagline: 'Speckled grey from the kiln',
    about:
      'Grey, speckled surfaces where soda and ash settled thickly. Each one reads like weathered stone.',
  },
  {
    id: 'oribe',
    name: 'Oribe',
    swatch: '#6c7546',
    tagline: 'Copper green, pooled at the edges',
    about:
      'Olive and sage greens from Oribe, a traditional copper glaze. It runs and pools on the facets, darkest where it gathers.',
  },
  {
    id: 'cobalt',
    name: 'Cobalt',
    swatch: '#2e4a86',
    tagline: 'Blue as deep water',
    about:
      'Cobalt and blue glazes, from bright rims to deep pools. Blue against rust is a classic soda kiln pairing.',
  },
  {
    id: 'tidepool',
    name: 'Tidepool',
    swatch: '#3d8783',
    tagline: 'Turquoise, teal and blue green',
    about:
      'The colours of a Pacific tide pool. Turquoise and teal glazes that break lighter over every carved edge.',
  },
];

export const surfaceById = Object.fromEntries(surfaces.map((s) => [s.id, s])) as Record<SurfaceId, Surface>;

export const categories: { name: Category; slug: string; blurb: string }[] = [
  { name: 'Mugs', slug: 'mugs', blurb: 'Coffee mugs, tall mugs and cappuccino mugs.' },
  { name: 'Cups & Tea', slug: 'cups-and-tea', blurb: 'Handleless cups, yunomi, matcha bowls and faceted tea cups.' },
  { name: 'Bowls', slug: 'bowls', blurb: 'Small bowls, serving bowls, shallow dishes and platters.' },
  { name: 'Vases & Jars', slug: 'vases-and-jars', blurb: 'Bud vases, flower vases, canisters and lidded jars.' },
  { name: 'Objects', slug: 'objects', blurb: 'Ashtrays, shot cups and small things for the shelf.' },
];

export const categorySlug = (c: Category) => categories.find((x) => x.name === c)!.slug;

// Newest first, with sold pieces last.
export const products: Product[] = (pieces as Product[])
  .slice()
  .sort((a, b) => Number(a.sold) - Number(b.sold) || b.created - a.created || b.id - a.id);

export const available = products.filter((p) => !p.sold);

export const ETSY_SHOP = 'https://www.etsy.com/shop/MilzyCeramics';

export const formatPrice = (n: number) => `$${n.toLocaleString('en-US')}`;

// The cover photo used on cards, with the Etsy copy as a fallback.
export const cover = (p: Product, i = 0) => p.cards[i] ?? p.images[i]?.replace('il_1080xN', 'il_570xN');

export const fullName = (p: Product) => `${p.name} in ${surfaceById[p.surface].name}`;
