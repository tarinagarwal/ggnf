export type BlogSection =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; html: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; title: string; body: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'productRef'; slugs: string[]; intro?: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  category: 'Education' | 'Crop Guide' | 'Field Notes';
  cover: string;
  excerpt: string;
  sections: BlogSection[];
  relatedProductSlugs?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'water-soluble-vs-granular-npk',
    title: 'Water-Soluble vs Granular NPK Fertilizers — Which Should You Use?',
    description:
      'A practical comparison of water-soluble and granular NPK fertilizers for Indian farms — solubility, nutrient release, application methods, cost and when each one wins.',
    keywords: [
      'water soluble NPK',
      'granular NPK',
      'fertigation',
      'foliar spray',
      'NPK 19:19:19',
      'NPK comparison',
    ],
    publishedAt: '2026-05-23',
    readingMinutes: 8,
    category: 'Education',
    cover: '/content/blog-water-soluble-vs-granular.jpg',
    excerpt:
      'Granular NPK feeds the soil slowly. Water-soluble NPK feeds the plant directly. Both have a place — the trick is knowing which one to reach for at each stage of the crop.',
    sections: [
      { type: 'h2', text: 'The short answer' },
      {
        type: 'p',
        html: 'Use <strong>granular NPK</strong> as the base dose at sowing or transplanting — it releases nutrients over weeks and builds the soil fertility pool. Use <strong>water-soluble NPK</strong> through drip (fertigation) or as a foliar spray when the crop is actively growing and needs nutrients <em>now</em> — flowering, fruit set, grain fill, stress recovery.',
      },
      {
        type: 'p',
        html: 'They are not competitors. On a well-run farm they work in sequence: granular for the foundation, water-soluble for the push.',
      },
      { type: 'h2', text: 'What "water-soluble" actually means' },
      {
        type: 'p',
        html: 'A fertilizer is called water-soluble when 100% of the nutrient dissolves in irrigation water and leaves no residue in the tank or the drip emitter. The international benchmark is &lt;0.5% insoluble matter. <strong>Premium imported grades like Fertisol NPK 19:19:19 are engineered to that spec</strong> — which is why they can be run through drip lines without clogging.',
      },
      {
        type: 'p',
        html: 'Most domestic "NPK mixture" fertilizers in 50 kg bags are <em>partially</em> soluble at best. They are formulated for broadcast application onto soil, not for fertigation.',
      },
      { type: 'h2', text: 'Side-by-side comparison' },
      {
        type: 'table',
        headers: ['Property', 'Granular NPK', 'Water-Soluble NPK'],
        rows: [
          ['Solubility', 'Partial or slow-release', '100% — clear solution'],
          ['Application', 'Broadcast, banding, side-dress', 'Drip fertigation, foliar spray'],
          ['Nutrient release', 'Days to weeks', 'Available within hours'],
          ['Wastage', 'Higher (leaching, volatilization)', 'Lower (placed at root zone)'],
          ['Cost per kg of nutrient', 'Lower', 'Higher (2–4×)'],
          ['Best for', 'Base dose, large field crops', 'High-value crops, critical growth stages'],
          ['Storage', 'Tolerates humidity if bagged', 'Must stay dry — clumps easily'],
        ],
      },
      { type: 'h2', text: 'When to choose granular NPK' },
      {
        type: 'ul',
        items: [
          'Pre-sowing or at-planting base dose for paddy, wheat, sugarcane, cotton',
          'Large rain-fed plots with no irrigation infrastructure',
          'When you need to build long-term soil P and K reserves',
          'When budget per acre is the dominant constraint',
        ],
      },
      { type: 'h2', text: 'When water-soluble NPK is the right choice' },
      {
        type: 'ul',
        items: [
          'Drip-irrigated horticulture: tomato, capsicum, banana, grape, pomegranate',
          'Polyhouse and greenhouse production',
          'Flowering and fruit-set stage where deficiency symptoms appear within days',
          'Recovery from heat, cold or water stress — leaves absorb foliar nutrients in 2–6 hours',
          'Sandy soils where leaching of granular fertilizer is severe',
        ],
      },
      { type: 'h2', text: 'Reading the NPK ratio' },
      {
        type: 'p',
        html: 'The three numbers on every NPK bag are <strong>Nitrogen : Phosphate (P₂O₅) : Potash (K₂O)</strong> as a percentage of total weight. Match the ratio to the crop stage:',
      },
      {
        type: 'table',
        headers: ['Grade', 'What it does', 'Best stage'],
        rows: [
          ['13:40:13', 'High phosphorus — drives root growth', 'Early vegetative, transplanting'],
          ['19:19:19', 'Balanced — universal vegetative push', 'Mid-vegetative, general nutrition'],
          ['20:20:20', 'Balanced, slightly higher concentration', 'Nursery, polyhouse, foliar'],
          ['13:00:45', 'High potassium — fruit / grain filling', 'Flowering to harvest'],
          ['00:52:34', 'Phosphorus + potassium, no nitrogen', 'Pre-flowering, when N is excess'],
        ],
      },
      {
        type: 'productRef',
        intro:
          'These are the imported water-soluble NPK grades we stock — each is 100% soluble, chloride-controlled, and packed to international spec.',
        slugs: [
          'fertisol-npk-19-19-19',
          'fertisol-npk-13-40-13',
          'fertisol-npk-20-20-20',
          'fertisol-npk-13-00-45',
        ],
      },
      { type: 'h2', text: 'Practical schedule for a vegetable crop' },
      {
        type: 'ol',
        items: [
          'Pre-sowing: full granular base dose per soil-test recommendation',
          'Transplant + 7 days: drench with 5 g/L of 13:40:13 for root establishment',
          'Vegetative stage (15–35 days): weekly fertigation of 19:19:19 at 3–5 kg/acre',
          'Pre-flowering: switch to 00:52:34 for one week to harden growth',
          'Flowering and fruit set: 13:00:45 weekly until harvest',
          'Stress events: foliar 19:19:19 at 5 g/L within 24 hours',
        ],
      },
      {
        type: 'callout',
        title: 'A note on chloride',
        body: 'Many cheap NPK products use muriate of potash (KCl) as the K source. The chloride is harmful to sensitive crops like tobacco, grape, citrus, mango and most vegetables. Always check that water-soluble grades use sulphate of potash or potassium nitrate — Fertisol grades do.',
      },
      { type: 'h2', text: 'The bottom line' },
      {
        type: 'p',
        html: 'Granular NPK is the staple. Water-soluble NPK is the precision tool. For any crop where yield or quality justifies the extra cost — vegetables, fruits, polyhouse, drip-irrigated cereals — water-soluble pays back many times its premium. For broadacre rain-fed grains, stick to granular at the base and reserve water-soluble for stress recovery.',
      },
      {
        type: 'p',
        html: 'If you are setting up fertigation for the first time, start with <a href="/products/fertisol-npk-19-19-19/" class="underline">19:19:19</a> as your workhorse and add specialty grades as the crop demands them.',
      },
    ],
    relatedProductSlugs: [
      'fertisol-npk-19-19-19',
      'fertisol-npk-13-40-13',
      'fertisol-npk-13-00-45',
    ],
  },
  {
    slug: 'edta-vs-dtpa-chelated-micronutrients',
    title: 'EDTA vs DTPA Chelated Micronutrients — A Practical Guide',
    description:
      'Why chelated micronutrients out-perform sulphate forms, when EDTA wins, when DTPA is essential, and how to choose the right chelate for your soil pH and crop.',
    keywords: [
      'chelated micronutrients',
      'EDTA chelate',
      'DTPA chelate',
      'zinc EDTA',
      'iron chelate',
      'micronutrient deficiency',
    ],
    publishedAt: '2026-05-23',
    readingMinutes: 7,
    category: 'Education',
    cover: '/content/blog-chelated-micronutrients.jpg',
    excerpt:
      'A chelate is a molecular cage that holds a micronutrient and stops the soil from locking it up. EDTA, DTPA and EDDHA are the three you will see on labels — and each works in a different pH window.',
    sections: [
      { type: 'h2', text: 'What is a chelate?' },
      {
        type: 'p',
        html: 'A chelate (from the Greek <em>chele</em>, "claw") is an organic molecule that wraps around a metal nutrient like zinc, iron or manganese. Inside this molecular cage, the nutrient stays in solution and remains available to the plant. Without the cage, those same metals would react with calcium, phosphate or hydroxide in the soil and become insoluble — visible to the plant root but chemically out of reach.',
      },
      {
        type: 'p',
        html: 'This is why a soil test can show "sufficient" zinc while the crop screams deficiency. The zinc is there — it is just locked up.',
      },
      { type: 'h2', text: 'Why chelates beat sulphates' },
      {
        type: 'table',
        headers: ['Property', 'Zinc Sulphate (ZnSO₄)', 'Zinc EDTA (12%)'],
        rows: [
          ['Zinc content', '21–33%', '12%'],
          ['Soil fixation', 'High — 90% locked in days', 'Low — stays available for weeks'],
          ['Foliar absorption', 'Slow, often scorches leaves', 'Fast, gentle on foliage'],
          ['Effective dose', '20–25 kg/acre', '0.5–1 kg/acre'],
          ['Cost per kg of available Zn', 'Higher in practice', 'Lower in practice'],
        ],
      },
      {
        type: 'p',
        html: 'The trick: sulphate forms look cheaper per kg of nutrient on paper, but most of it never reaches the plant. Chelated forms deliver almost everything the bag promises.',
      },
      { type: 'h2', text: 'The three chelates you will see' },
      { type: 'h3', text: 'EDTA — the workhorse' },
      {
        type: 'p',
        html: '<strong>Ethylenediaminetetraacetic acid.</strong> Stable from pH 4 to pH 7.5. Cheapest of the chelates, used for zinc, manganese, copper and sometimes iron. Works for the vast majority of Indian soils — anything from acidic forest soils up to neutral alluvial plains.',
      },
      {
        type: 'p',
        html: '<strong>Use EDTA when:</strong> Your soil pH is below 7.5 and you are correcting Zn, Mn, Cu or Fe deficiency in field crops or vegetables.',
      },
      { type: 'h3', text: 'DTPA — for higher pH soils' },
      {
        type: 'p',
        html: '<strong>Diethylenetriaminepentaacetic acid.</strong> Stays stable up to pH 8 — important in calcareous soils common across north Gujarat, Rajasthan and the Indo-Gangetic plains where free lime pushes pH above 7.5.',
      },
      {
        type: 'p',
        html: '<strong>Use DTPA when:</strong> Your soil is calcareous, alkaline, or your water source is hard (high bicarbonate). DTPA-Fe is the standard for iron deficiency chlorosis in north India.',
      },
      { type: 'h3', text: 'EDDHA — the heavy artillery for iron' },
      {
        type: 'p',
        html: '<strong>Ethylenediamine-N,N′-bis(2-hydroxyphenylacetic acid).</strong> Stable up to pH 9. The only chelate that reliably keeps iron available in highly calcareous soils with pH above 8. Expensive — used only for chronic iron chlorosis in high-value crops (citrus, grape, pomegranate, ornamentals).',
      },
      { type: 'h2', text: 'How to read the label' },
      {
        type: 'p',
        html: 'A genuine chelated micronutrient bag will state the chelate type and the chelated fraction:',
      },
      {
        type: 'ul',
        items: [
          '"Zinc as Zn-EDTA: 12% min" — the entire 12% is chelated',
          '"Fe-EDDHA: 6% (4.8% ortho-ortho)" — the ortho-ortho fraction is what matters for high pH soils',
          '"Manganese sulphate + chelating agent" — this is <em>not</em> chelated, just mixed. Avoid.',
        ],
      },
      {
        type: 'callout',
        title: 'Quick pH test for your soil',
        body: 'Use any pocket pH meter or even strips. Below 6.5: acidic — use EDTA, also lime if severe. 6.5–7.5: neutral — EDTA works for everything. 7.5–8.0: alkaline — DTPA for iron, EDTA fine for Zn/Mn. Above 8.0: calcareous — DTPA-Fe minimum, EDDHA-Fe for chronic chlorosis.',
      },
      { type: 'h2', text: 'Foliar vs soil application' },
      {
        type: 'p',
        html: 'Chelated micros work both ways, but rules of thumb:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Foliar:</strong> Fastest response (visible greening in 3–5 days). Dose: 0.5–1 g/L. Use early morning or evening, never under hot sun.',
          '<strong>Soil / fertigation:</strong> Longer-lasting (4–6 weeks). Dose: 0.5–2 kg/acre. Place near root zone; do not broadcast onto the surface.',
        ],
      },
      {
        type: 'productRef',
        intro: 'Our EDTA-chelated micronutrient line — formulated to international purity spec:',
        slugs: [
          'fertisol-zn-edta-12',
        ],
      },
      { type: 'h2', text: 'Common mistakes' },
      {
        type: 'ol',
        items: [
          '<strong>Mixing chelates with phosphates in the tank.</strong> Phosphate displaces the chelate and precipitates. Apply separately, at least 6 hours apart.',
          '<strong>Using EDTA-Fe on alkaline soil.</strong> The iron releases and re-precipitates within hours. Use DTPA or EDDHA instead.',
          '<strong>Spraying at midday.</strong> Stomata close, droplets evaporate, leaves scorch. Always early morning or after 4 pm.',
          '<strong>Over-applying.</strong> Micronutrients are needed in grams, not kilograms. Excess Zn or Mn becomes toxic and locks out iron.',
        ],
      },
      { type: 'h2', text: 'Bottom line' },
      {
        type: 'p',
        html: 'For 80% of Indian farms, <strong>EDTA-chelated micronutrients are the right choice</strong> — cheaper, plenty stable, and dramatically better than sulphates. Reach for DTPA when your soil pH is above 7.5 or your irrigation water is hard. Save EDDHA for chronic iron chlorosis in high-value horticulture.',
      },
    ],
    relatedProductSlugs: ['fertisol-zn-edta-12'],
  },
  {
    slug: 'phosphogypsum-for-saline-alkaline-soils',
    title: 'Phosphogypsum for Saline and Alkaline Soils — A Field Guide',
    description:
      'How phosphogypsum reclaims sodic, saline and alkaline soils — application rates, what to expect in year one, and how it compares to mineral gypsum and elemental sulphur.',
    keywords: [
      'phosphogypsum',
      'saline soil reclamation',
      'sodic soil',
      'alkaline soil treatment',
      'gypsum application',
      'soil conditioner',
    ],
    publishedAt: '2026-05-23',
    readingMinutes: 6,
    category: 'Field Notes',
    cover: '/content/blog-phosphogypsum-saline-soil.jpg',
    excerpt:
      'White patches on the soil surface. Crusty bare spots where nothing grows. Stunted, yellowing crops at field margins. These are sodic-soil symptoms — and phosphogypsum is the cheapest, fastest correction in the farmer\'s toolkit.',
    sections: [
      { type: 'h2', text: 'What is phosphogypsum?' },
      {
        type: 'p',
        html: 'Phosphogypsum is calcium sulphate dihydrate (CaSO₄·2H₂O) — chemically the same as mineral gypsum, but with traces of phosphorus, sulphur and other nutrients carried over from the fertilizer manufacturing process. It is sold as a fine off-white powder or granule.',
      },
      {
        type: 'p',
        html: 'It is not a fertilizer in the NPK sense — it is a <strong>soil conditioner</strong>. Its job is to fix what is wrong with the soil so that whatever fertilizer you do apply actually works.',
      },
      { type: 'h2', text: 'How it reclaims sodic soil' },
      {
        type: 'p',
        html: 'A sodic soil is one where sodium ions (Na⁺) dominate the exchange sites on clay particles. Sodium causes clay to swell shut, blocking water infiltration and root penetration. The visible symptom is a hard, slick crust and patches where rainwater stands.',
      },
      {
        type: 'p',
        html: 'Phosphogypsum delivers <strong>calcium ions (Ca²⁺)</strong>. Calcium is more strongly attracted to the clay than sodium is — it displaces the sodium, which then leaches downward with the next irrigation or rain. The displaced sodium combines with sulphate (SO₄²⁻) from the gypsum to form Na₂SO₄, which is highly water-soluble and washes out of the root zone.',
      },
      {
        type: 'callout',
        title: 'The reaction in one line',
        body: 'Soil-clay-Na + CaSO₄ → Soil-clay-Ca + Na₂SO₄ (leached away)',
      },
      { type: 'h2', text: 'Visible symptoms of sodic / saline / alkaline soil' },
      {
        type: 'ul',
        items: [
          'White or grey crusts on the soil surface after irrigation dries',
          'Bare patches where nothing germinates, surrounded by stunted growth',
          'Soil that puddles instead of absorbing water; hard pan after drying',
          'Yellow or pale crops despite normal NPK applications',
          'pH consistently above 8.0, EC above 4 dS/m, or ESP above 15%',
        ],
      },
      { type: 'h2', text: 'Application rates' },
      {
        type: 'p',
        html: 'Rates vary with the severity (measured as Exchangeable Sodium Percentage, ESP) and soil texture. As a starting point:',
      },
      {
        type: 'table',
        headers: ['Soil condition', 'Rate (per acre)', 'Frequency'],
        rows: [
          ['Mildly sodic (ESP 10–15%)', '200–400 kg', 'Once per year'],
          ['Moderately sodic (ESP 15–25%)', '500–800 kg', 'Every season for 2 years'],
          ['Severely sodic (ESP > 25%)', '1000–1500 kg', 'Every season for 3 years'],
          ['Maintenance (after reclamation)', '100–200 kg', 'Once every 2 years'],
        ],
      },
      {
        type: 'p',
        html: '<strong>Get a soil test before heavy application.</strong> Most agricultural universities and KVKs offer ESP and EC testing for under ₹200. Without it you are guessing at the rate.',
      },
      { type: 'h2', text: 'How to apply' },
      {
        type: 'ol',
        items: [
          'Apply 15–20 days before sowing or after harvest of the previous crop',
          'Broadcast uniformly over the soil surface',
          'Incorporate into the top 10–15 cm with a cultivator or harrow',
          'Irrigate heavily within 7 days — the leaching irrigation is what carries away the displaced sodium',
          'Do not mix with urea or ammonium sulphate in the same application — wait at least 7 days',
        ],
      },
      { type: 'h2', text: 'What to expect, year by year' },
      {
        type: 'table',
        headers: ['Year', 'Visible change', 'Yield response'],
        rows: [
          ['Year 1', 'Better water infiltration, crusts soften', '10–20% yield lift on previously stunted patches'],
          ['Year 2', 'Bare patches start producing, pH drops 0.3–0.5', '20–40% lift on whole-field basis'],
          ['Year 3', 'Soil structure normalises, root depth increases', 'Yield approaches non-sodic benchmark'],
          ['Year 4+', 'Maintenance dose only', 'Stable'],
        ],
      },
      { type: 'h2', text: 'Phosphogypsum vs alternatives' },
      {
        type: 'table',
        headers: ['Material', 'Speed', 'Cost / acre', 'Best for'],
        rows: [
          ['Phosphogypsum', 'Moderate (weeks)', '₹', 'Sodic & saline-sodic soils'],
          ['Mineral gypsum', 'Slow (months)', '₹₹', 'Same — but slower dissolution'],
          ['Elemental sulphur', 'Slow (3–6 months)', '₹₹₹', 'Calcareous alkaline soils only'],
          ['Sulphuric acid', 'Fast (days)', '₹₹₹₹', 'Industrial reclamation only'],
        ],
      },
      {
        type: 'p',
        html: '<strong>Phosphogypsum is the most cost-effective option for sodic soil in 95% of Indian situations.</strong> Elemental sulphur is better only when the problem is high pH with free lime but no sodium issue — and even then it takes 3–6 months to act.',
      },
      {
        type: 'productRef',
        intro: 'Our phosphogypsum-based soil conditioner — packed for direct field application:',
        slugs: ['super-gold-phosphogypsum'],
      },
      {
        type: 'callout',
        title: 'A note on radioactivity',
        body: 'Phosphogypsum from some sources contains trace radium and is restricted for agricultural use in a few countries. Indian phosphogypsum from DAP plants is tested and approved for agriculture by the Fertilizer Control Order — our Super Gold variant is fully compliant.',
      },
      { type: 'h2', text: 'Bottom line' },
      {
        type: 'p',
        html: 'If you have patches where crops refuse to grow, white crusts after irrigation, or chronically poor response to NPK, get a soil test. If ESP comes back above 10%, phosphogypsum is almost certainly the right intervention — cheaper, faster, and more reliable than the alternatives.',
      },
    ],
    relatedProductSlugs: ['super-gold-phosphogypsum'],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRecentBlogPosts(limit = 3, excludeSlug?: string): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== excludeSlug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
