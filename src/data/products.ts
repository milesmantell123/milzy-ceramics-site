// Every piece in the collection. Prices and listing links come from the
// MilzyCeramics Etsy shop. To add a photo, put the file in public/images/
// and set `image` to its path (for example '/images/vessel-no-01.jpg').

export type Category = 'Vessels' | 'Drinkware' | 'Bowls' | 'Lidded Jars' | 'Objects';

export interface Product {
  slug: string;
  number: string;
  name: string;
  finish: string;
  category: Category;
  price: number;
  etsy: string;
  // Two colours used for the placeholder plate until a photograph is added.
  tones: [string, string];
  // Overrides the placeholder drawing for drinkware without a handle.
  form?: 'cup' | 'small-cup';
  description: string;
  image?: string;
  featured?: boolean;
}

const RUST = '#b4532a';

export const products: Product[] = [
  {
    slug: 'large-vase-rust-cream',
    number: '01',
    name: 'Large Vase',
    finish: 'Rust orange and cream white',
    category: 'Vessels',
    price: 200,
    etsy: 'https://www.etsy.com/listing/4560755756',
    tones: [RUST, '#d6c9b1'],
    description:
      'The largest vessel in the collection. Thrown on the wheel and left to the soda kiln, where the flame paints rust across a pale cream ground.',
    featured: true,
  },
  {
    slug: 'vase-rust-black',
    number: '02',
    name: 'Flower Vase',
    finish: 'Rust orange and black',
    category: 'Vessels',
    price: 78,
    etsy: 'https://www.etsy.com/listing/4581262083',
    tones: [RUST, '#1d1b19'],
    description:
      'A flower vase where deep black glaze meets bare, flame-flashed clay. Each side of the piece faced the fire differently.',
    featured: true,
  },
  {
    slug: 'vase-rust-black-glaze',
    number: '03',
    name: 'Bud Vase',
    finish: 'Rust orange and black glaze',
    category: 'Vessels',
    price: 58,
    etsy: 'https://www.etsy.com/listing/4580648009',
    tones: [RUST, '#2a2724'],
    description:
      'A smaller vase for a single stem or a few cuttings, in black glaze over soda-fired stoneware.',
  },
  {
    slug: 'faceted-mug-rust-ice-blue',
    number: '04',
    name: 'Faceted Mug',
    finish: 'Rust orange and ice blue',
    category: 'Drinkware',
    price: 78,
    etsy: 'https://www.etsy.com/listing/4555426521',
    tones: [RUST, '#a9c4cc'],
    description:
      'Faceted by hand while the clay is still soft, so the walls catch light and the glaze breaks over every edge. Ice blue against rust.',
    featured: true,
  },
  {
    slug: 'faceted-mug-rust-green',
    number: '05',
    name: 'Faceted Mug',
    finish: 'Rust orange and green',
    category: 'Drinkware',
    price: 74,
    etsy: 'https://www.etsy.com/listing/4555433732',
    tones: [RUST, '#5f6b45'],
    description:
      'A faceted coffee mug with a green glaze that pools in the cuts and thins to rust on the edges.',
  },
  {
    slug: 'faceted-cup-rust-green',
    form: 'cup',
    number: '06',
    name: 'Faceted Cup',
    finish: 'Rust orange and green',
    category: 'Drinkware',
    price: 58,
    etsy: 'https://www.etsy.com/listing/4579884921',
    tones: [RUST, '#6b7550'],
    description: 'A handleless faceted cup, made to be held in both hands.',
  },
  {
    slug: 'faceted-tea-cup-rust-black',
    form: 'cup',
    number: '07',
    name: 'Faceted Tea Cup, 8 oz',
    finish: 'Rust orange and black',
    category: 'Drinkware',
    price: 52,
    etsy: 'https://www.etsy.com/listing/4579910144',
    tones: [RUST, '#1d1b19'],
    description: 'An eight ounce faceted stoneware tea cup in black and flame-flashed rust.',
  },
  {
    slug: 'tea-cup-5oz',
    form: 'cup',
    number: '08',
    name: 'Tea Cup, 5 oz',
    finish: 'Soda fired stoneware',
    category: 'Drinkware',
    price: 42,
    etsy: 'https://www.etsy.com/listing/4579919145',
    tones: [RUST, '#c9a27a'],
    description: 'A small tea cup, sized for a single pour.',
  },
  {
    slug: 'shot-glass-2oz',
    form: 'small-cup',
    number: '09',
    name: 'Shot Glass, 2 oz',
    finish: 'Soda fired stoneware',
    category: 'Drinkware',
    price: 24,
    etsy: 'https://www.etsy.com/listing/4579923433',
    tones: [RUST, '#8a5a3c'],
    description: 'A two ounce stoneware cup for spirits or espresso.',
  },
  {
    slug: 'shot-glass-1-5oz',
    form: 'small-cup',
    number: '10',
    name: 'Shot Glass, 1.5 oz',
    finish: 'Soda fired stoneware',
    category: 'Drinkware',
    price: 24,
    etsy: 'https://www.etsy.com/listing/4579924803',
    tones: [RUST, '#7a4e33'],
    description: 'A one and a half ounce stoneware cup for spirits.',
  },
  {
    slug: 'bowl-rust-cream',
    number: '11',
    name: 'Bowl',
    finish: 'Rust orange and cream white',
    category: 'Bowls',
    price: 74,
    etsy: 'https://www.etsy.com/listing/4561955299',
    tones: [RUST, '#d6c9b1'],
    description: 'A wheel-thrown bowl in cream white glaze, warmed with rust where the soda reached it.',
    featured: true,
  },
  {
    slug: 'bowl-rust-black',
    number: '12',
    name: 'Bowl',
    finish: 'Rust orange and black',
    category: 'Bowls',
    price: 44,
    etsy: 'https://www.etsy.com/listing/4572245916',
    tones: [RUST, '#1d1b19'],
    description: 'A small bowl in black glaze and flame-flashed stoneware.',
  },
  {
    slug: 'lidded-jar-rust-amber',
    number: '13',
    name: 'Lidded Jar',
    finish: 'Rust orange and amber',
    category: 'Lidded Jars',
    price: 85,
    etsy: 'https://www.etsy.com/listing/4556687800',
    tones: [RUST, '#c98a2e'],
    description: 'A lidded jar in amber glaze. The lid is thrown and fired with its jar so the two belong to each other.',
  },
  {
    slug: 'faceted-lidded-jar-rust',
    number: '14',
    name: 'Faceted Lidded Jar',
    finish: 'Rust orange',
    category: 'Lidded Jars',
    price: 85,
    etsy: 'https://www.etsy.com/listing/4555582370',
    tones: [RUST, '#9a4524'],
    description: 'A faceted lidded jar or urn, almost entirely given over to the colour of the fire.',
    featured: true,
  },
  {
    slug: 'ashtray-rust-ice-blue',
    number: '15',
    name: 'Ashtray',
    finish: 'Rust orange and ice blue',
    category: 'Objects',
    price: 44,
    etsy: 'https://www.etsy.com/listing/4562633332',
    tones: [RUST, '#a9c4cc'],
    description: 'A heavy stoneware ashtray in ice blue and rust. Also a home for keys, rings or incense.',
  },
];

export const categories: Category[] = ['Vessels', 'Drinkware', 'Bowls', 'Lidded Jars', 'Objects'];

export const ETSY_SHOP = 'https://www.etsy.com/shop/MilzyCeramics';

export const formatPrice = (n: number) => `$${n.toLocaleString('en-US')}`;
