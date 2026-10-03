// Every piece in the collection. Prices, details, listing links and
// photographs come from the MilzyCeramics Etsy shop; images are served
// from Etsy's image server. A photo can also be a local file in
// public/images/ (for example '/images/vessel-no-01.jpg').

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
  // Photographs, first one is the cover.
  images?: string[];
  // Extra rows for the details table, from the Etsy listing.
  specs?: [string, string][];
  featured?: boolean;
}

const RUST = '#b4532a';
const ETSY_IMG = 'https://i.etsystatic.com/29650180/r/il/';

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
      'The largest vessel in the collection. Faceted by hand with a wire while the clay was soft, then given three days in the soda kiln. Every colour on the outside came from the fire itself.',
    images: [`${ETSY_IMG}0b6e8d/8417923174/il_1080xN.8417923174_pqth.jpg`],
    specs: [['Dimensions', '8.5 in tall, 7 in wide, 5 in opening'], ['Interior', "Saint John's Black glaze"]],
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
      'A faceted vase with no applied glaze on the outside. The rust flashing is the clay body itself, changed by flame and soda vapour.',
    images: [`${ETSY_IMG}4062d1/8616075705/il_1080xN.8616075705_1fas.jpg`],
    specs: [['Dimensions', '6 in tall'], ['Interior', "Saint John's Black glaze"]],
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
      'A smaller faceted vase for a single stem or a few cuttings, its exterior coloured entirely by the soda kiln.',
    images: [`${ETSY_IMG}b12e66/8611400859/il_1080xN.8611400859_bwn6.jpg`],
    specs: [['Dimensions', '5 in tall, 2 in opening'], ['Interior', "Saint John's Black glaze"]],
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
      'Flat panels cut with a wire while the clay was soft, a handle pulled and attached by hand, then three days in the soda kiln. Rust flashing outside, a glazed interior within.',
    images: [`${ETSY_IMG}2e50e1/8379168584/il_1080xN.8379168584_m1vc.jpg`, `${ETSY_IMG}ce8e11/8427034823/il_1080xN.8427034823_36ui.jpg`, `${ETSY_IMG}5e3589/8427034711/il_1080xN.8427034711_hp6p.jpg`, `${ETSY_IMG}5cd05b/8379161182/il_1080xN.8379161182_i2uw.jpg`, `${ETSY_IMG}423136/8427034865/il_1080xN.8427034865_o5gc.jpg`],
    specs: [['Capacity', '12 fl oz'], ['Interior', 'Impressionist Purple glaze']],
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
      'A faceted coffee mug in a clay body mixed in the studio. Where the flame touched it, the stoneware turned to rust; inside, a sage green Oribe glaze.',
    images: [`${ETSY_IMG}33e0c9/8427030227/il_1080xN.8427030227_xzkz.jpg`],
    specs: [['Capacity', '10 fl oz'], ['Interior', 'Sage green Oribe glaze']],
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
    description:
      'A handleless faceted cup, made to be held in both hands. The colour outside is not glaze at all, but the flashing of the stoneware in the soda kiln.',
    images: [`${ETSY_IMG}53e67c/8557925470/il_1080xN.8557925470_gao9.jpg`],
    specs: [['Capacity', '12 fl oz'], ['Dimensions', '4 in wide, 4 in tall'], ['Interior', 'Oribe glaze']],
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
    description:
      'An eight ounce faceted tea cup. White flashing stoneware outside, warmed by the fire, with a black glazed interior.',
    images: [`${ETSY_IMG}4e2eb6/8605850251/il_1080xN.8605850251_8vmu.jpg`],
    specs: [['Capacity', '8 fl oz'], ['Dimensions', '3.5 in wide, 3 in tall'], ['Interior', 'Black glaze']],
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
    description:
      'A small tea cup sized for a single pour, marked by flame, ash and soda vapour as they moved through the kiln.',
    images: [`${ETSY_IMG}60d6eb/8558173392/il_1080xN.8558173392_99sx.jpg`],
    specs: [['Capacity', '5 fl oz']],
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
    description:
      'A small cup with a lot of character, for whiskey, mezcal or espresso. The flashing and glaze variation were shaped by the fire as much as by hand.',
    images: [`${ETSY_IMG}278317/8558206940/il_1080xN.8558206940_l11a.jpg`],
    specs: [['Capacity', '2 fl oz'], ['Dimensions', '2 in wide, 2 in tall']],
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
    description:
      'For a pour of whiskey or mezcal, a shot of espresso, or simply a small piece of kiln magic on a shelf.',
    images: [`${ETSY_IMG}b4951a/8606071841/il_1080xN.8606071841_3k0c.jpg`],
    specs: [['Capacity', '1.5 fl oz'], ['Dimensions', '2 in wide, 2 in tall']],
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
    description:
      'A faceted serving bowl with rust flashing outside and a Marie Woo Blue glaze within.',
    images: [`${ETSY_IMG}596ab9/8474805119/il_1080xN.8474805119_ix7x.jpg`],
    specs: [['Dimensions', '5.5 in opening'], ['Interior', 'Marie Woo Blue glaze']],
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
    description:
      "A small faceted bowl. Bare, flame-flashed stoneware outside; Saint John's Black inside.",
    images: [`${ETSY_IMG}316a32/8500900296/il_1080xN.8500900296_sig7.jpg`],
    specs: [['Dimensions', '5 in opening, 4 in tall'], ['Interior', "Saint John's Black glaze"]],
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
    description:
      'A faceted jar with vertical marks cut into the wet clay and a combed lid made to fit it. For salt, spices, tea, coffee beans, or rings and keepsakes.',
    images: [`${ETSY_IMG}31bfce/8436202637/il_1080xN.8436202637_eybp.jpg`],
    specs: [['Lid', 'Combed, hand-thrown, snug fitting']],
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
    description:
      'A faceted jar or urn in rust and amber, with a fitted combed lid. For loose tea and dried herbs, or as a memorial vessel.',
    images: [`${ETSY_IMG}54c4d3/8380200962/il_1080xN.8380200962_iykx.jpg`, `${ETSY_IMG}2d4ffa/8428075037/il_1080xN.8428075037_kubn.jpg`, `${ETSY_IMG}0c71b9/8380200956/il_1080xN.8380200956_nx9x.jpg`, `${ETSY_IMG}cec3b4/8428074847/il_1080xN.8428074847_cskf.jpg`, `${ETSY_IMG}93285e/8428075045/il_1080xN.8428075045_18fm.jpg`, `${ETSY_IMG}d79466/8428074917/il_1080xN.8428074917_gb42.jpg`],
    specs: [['Interior', 'Shino glaze'], ['Lid', 'Combed, hand-thrown, snug fitting']],
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
    description:
      'A faceted stoneware ashtray with an Oribe glazed well. Also a home for keys, rings or incense.',
    images: [`${ETSY_IMG}22c9ea/8431696246/il_1080xN.8431696246_l0uw.jpg`],
    specs: [['Interior', 'Oribe glaze']],
  },
];

export const categories: Category[] = ['Vessels', 'Drinkware', 'Bowls', 'Lidded Jars', 'Objects'];

export const ETSY_SHOP = 'https://www.etsy.com/shop/MilzyCeramics';

export const formatPrice = (n: number) => `$${n.toLocaleString('en-US')}`;
