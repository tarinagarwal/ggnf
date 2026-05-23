import type { BlogSection } from './blog';

export type CropGuide = {
  slug: string;
  crop: string;
  title: string;
  description: string;
  keywords: string[];
  cover: string;
  excerpt: string;
  growthDuration: string;
  season: string;
  regions: string[];
  sections: BlogSection[];
  relatedProductSlugs: string[];
};

export const cropGuides: CropGuide[] = [
  {
    slug: 'sugarcane',
    crop: 'Sugarcane',
    title: 'Sugarcane Fertilizer Schedule — Complete Nutrition Plan',
    description:
      'A field-tested nutrition schedule for sugarcane in India — base dose, ratoon management, water-soluble NPK fertigation, sulphur, calcium and micronutrient timing for maximum cane yield and sugar recovery.',
    keywords: [
      'sugarcane fertilizer',
      'sugarcane NPK schedule',
      'sugarcane nutrition',
      'ratoon fertilizer',
      'sugarcane micronutrients',
      'cane yield improvement',
    ],
    cover: '/content/guide-sugarcane.jpg',
    excerpt:
      'A 10–12 month crop with extreme nutrient demand. Get the schedule right and a single ratoon can match a planted crop in yield.',
    growthDuration: '10–12 months',
    season: 'Adsali / Suru / Pre-seasonal',
    regions: ['Maharashtra', 'Uttar Pradesh', 'Karnataka', 'Tamil Nadu', 'Gujarat'],
    sections: [
      { type: 'h2', text: 'Why sugarcane is a nutrient-hungry crop' },
      {
        type: 'p',
        html: 'A 100-tonne-per-acre sugarcane crop removes roughly <strong>250 kg N, 100 kg P₂O₅, 350 kg K₂O</strong> plus 80 kg S and significant calcium and silicon from the soil. The cane plant accumulates biomass continuously across 10–12 months, with peak nutrient uptake during the <strong>grand growth phase (3–7 months after planting)</strong>.',
      },
      {
        type: 'p',
        html: 'Most yield gaps in Indian sugarcane come from under-fertilization during this peak phase — farmers apply the base dose generously but go quiet during the months when the crop actually needs the nutrients.',
      },
      { type: 'h2', text: 'The four growth stages' },
      {
        type: 'table',
        headers: ['Stage', 'Days', 'What is happening', 'Nutrient priority'],
        rows: [
          ['Germination', '0–35 days', 'Bud sprout, primary root', 'P, micronutrients'],
          ['Tillering', '35–100 days', 'Multiple shoots per stool', 'N, K, Zn, S'],
          ['Grand growth', '100–270 days', 'Stalk elongation, cane formation', 'N, K, Mg, S — heaviest demand'],
          ['Maturity', '270–360 days', 'Sucrose accumulation', 'K, Ca, B — taper N'],
        ],
      },
      { type: 'h2', text: 'Recommended schedule per acre' },
      { type: 'h3', text: 'Base dose (at planting, before sett placement)' },
      {
        type: 'ul',
        items: [
          'Farmyard manure: 4–6 tonnes — apply 15 days before planting',
          'Granular DAP: 100 kg (supplies P + starter N)',
          'Single super phosphate: 150 kg (additional P + 12 kg S)',
          'Phosphogypsum: 400 kg (calcium + sulphur, especially for sodic patches)',
          'Zinc sulphate: 25 kg, or Zn-EDTA: 1 kg (one-time correction every 3 years)',
        ],
      },
      { type: 'h3', text: 'Tillering phase (40–90 days)' },
      {
        type: 'ul',
        items: [
          'Urea: 80 kg total, split — 40 kg at 45 days, 40 kg at 75 days',
          'Muriate of potash: 50 kg at 60 days',
          'Fertigation (if drip available): Fertisol NPK 19:19:19 at 3 kg/acre weekly for 6 weeks',
          'Foliar Zn-EDTA: 0.5 g/L if leaf yellowing appears',
        ],
      },
      { type: 'h3', text: 'Grand growth (3–7 months) — the critical window' },
      {
        type: 'ul',
        items: [
          'Urea: 80 kg total, split — 40 kg at 120 days, 40 kg at 150 days',
          'Muriate of potash: 100 kg split — 50 kg at 120 days, 50 kg at 180 days',
          'Magnesium sulphate: 25 kg at 150 days (prevents inter-veinal yellowing)',
          'Fortnightly fertigation: 19:19:19 at 4 kg/acre, alternated with 13:00:45 from 6th month',
          'Foliar 19:19:19 + Zn + B at 5 g + 0.5 g + 0.2 g per L if rapid stalk elongation is needed',
        ],
      },
      { type: 'h3', text: 'Maturity (8–11 months)' },
      {
        type: 'ul',
        items: [
          'Stop nitrogen by 8 months — late N delays maturity and drops sugar recovery',
          'Fertigate 00:00:50 (sulphate of potash) at 3 kg/acre weekly for 4 weeks before harvest',
          'Foliar potassium nitrate (13:00:45) at 5 g/L improves sucrose buildup',
          'Boron foliar (Solubor) at 1 g/L two months before harvest — prevents pith and dead heart',
        ],
      },
      { type: 'h2', text: 'Ratoon management' },
      {
        type: 'p',
        html: 'A well-fed first ratoon can match the planted crop. The mistake most farmers make is treating ratoon as a free harvest and skipping the base dose.',
      },
      {
        type: 'ol',
        items: [
          'Within 15 days of harvest: trash mulch in alternate rows, apply 50 kg urea + 50 kg MOP to break dormancy',
          'Inter-cultivate and earth-up at 30 days',
          'Then follow the full schedule above, but reduce P by 30% (residual P is sufficient)',
          'Phosphogypsum should be re-applied at 200 kg/acre — sulphur depletes faster in ratoon',
        ],
      },
      {
        type: 'callout',
        title: 'Sett treatment — often skipped, always worth it',
        body: 'Soak setts for 10 minutes in a solution of 0.5% Zn-EDTA + 0.1% Boron + recommended fungicide. Sprouting improves by 15–20%, and the first-month deficiency window is eliminated.',
      },
      { type: 'h2', text: 'Visual deficiency cues' },
      {
        type: 'table',
        headers: ['Symptom', 'Likely deficiency', 'Quick fix'],
        rows: [
          ['Older leaves yellow from tip inward', 'Nitrogen', 'Urea 1% foliar + soil top-dress'],
          ['Purple/red coloration on undersides', 'Phosphorus', 'DAP side-dress or foliar 13:40:13'],
          ['Yellow margins on older leaves, scorched tips', 'Potassium', 'MOP top-dress + foliar 13:00:45'],
          ['Inter-veinal yellow on middle leaves', 'Magnesium', 'MgSO₄ 1% foliar'],
          ['White streaking on young leaves', 'Zinc', 'Zn-EDTA 0.5 g/L foliar'],
          ['Distorted whorl, dead heart', 'Boron', 'Solubor 1 g/L foliar'],
          ['Yellow young leaves, green veins', 'Iron / Manganese', 'Fe-DTPA or Mn-EDTA 0.5 g/L foliar'],
        ],
      },
      {
        type: 'productRef',
        intro: 'The water-soluble grades that drive the fertigation programme:',
        slugs: [
          'fertisol-npk-19-19-19',
          'fertisol-npk-13-00-45',
          'fertisol-zn-edta-12',
          'super-gold-phosphogypsum',
        ],
      },
      { type: 'h2', text: 'Five mistakes to avoid' },
      {
        type: 'ol',
        items: [
          '<strong>All nitrogen in one shot.</strong> Splits matter — sugarcane uptake is gradual.',
          '<strong>Ignoring sulphur.</strong> Modern high-yield cane needs 60–80 kg S per acre, far more than what urea + DAP supply.',
          '<strong>Late nitrogen.</strong> N after 8 months keeps the crop green but drops sugar recovery.',
          '<strong>Skipping micronutrients in ratoon.</strong> Zinc and boron deplete fastest under continuous cropping.',
          '<strong>Broadcasting on dry soil.</strong> Always apply urea after irrigation or before rain — dry-soil application loses 30–40% to volatilization.',
        ],
      },
      { type: 'h2', text: 'Bottom line' },
      {
        type: 'p',
        html: 'The base dose alone gives you 50–60 tonnes per acre. The grand-growth fertigation programme is what takes you to 80–100+ tonnes with good sugar recovery. Spend on splits and chelated micros during months 3–7 — that is where the yield is hiding.',
      },
    ],
    relatedProductSlugs: [
      'fertisol-npk-19-19-19',
      'fertisol-npk-13-00-45',
      'fertisol-zn-edta-12',
      'super-gold-phosphogypsum',
    ],
  },
  {
    slug: 'cotton',
    crop: 'Cotton',
    title: 'Cotton Fertilizer Schedule — Boll-by-Boll Nutrition Plan',
    description:
      'Complete cotton fertilizer schedule for Indian conditions — Bt cotton nutrition, water-soluble fertigation, potassium and boron timing for boll retention, and stage-wise micronutrient corrections.',
    keywords: [
      'cotton fertilizer',
      'Bt cotton nutrition',
      'cotton NPK',
      'cotton fertigation',
      'boll retention',
      'cotton boron',
    ],
    cover: '/content/guide-cotton.jpg',
    excerpt:
      'Cotton drops bolls when it runs short of potassium or boron at flowering. Most "low-yield" cotton fields are not pest victims — they are starvation victims at flowering.',
    growthDuration: '150–180 days',
    season: 'Kharif (June–November)',
    regions: ['Gujarat', 'Maharashtra', 'Telangana', 'Andhra Pradesh', 'Punjab'],
    sections: [
      { type: 'h2', text: 'Why cotton fertilization is different' },
      {
        type: 'p',
        html: 'Cotton is an <strong>indeterminate crop</strong> — it flowers and forms bolls continuously over 60–80 days, not in one synchronised window. This means nutrient demand is sustained, not peaked. A single late top-dress of urea will not save a flowering crop that ran out of potassium two weeks earlier.',
      },
      {
        type: 'p',
        html: 'A high-yielding Bt cotton crop targeting 12–15 quintals per acre removes <strong>120 kg N, 50 kg P₂O₅, 100 kg K₂O, 20 kg S</strong> and notable amounts of zinc, boron and magnesium.',
      },
      { type: 'h2', text: 'Growth stages and nutrient priority' },
      {
        type: 'table',
        headers: ['Stage', 'Days', 'Key process', 'Priority nutrients'],
        rows: [
          ['Germination/seedling', '0–25', 'Establishment, taproot', 'P, Zn'],
          ['Vegetative', '25–50', 'Square formation begins', 'N, K, B'],
          ['Flowering', '50–95', 'Continuous boll set', 'K, B, S — critical window'],
          ['Boll development', '95–130', 'Fibre formation', 'K, Mg, Ca'],
          ['Maturation', '130–170', 'Boll opening', 'Taper N, support K'],
        ],
      },
      { type: 'h2', text: 'Recommended schedule per acre — Bt cotton, irrigated' },
      { type: 'h3', text: 'Base dose (at sowing or transplanting)' },
      {
        type: 'ul',
        items: [
          'FYM: 3–4 tonnes (apply 15 days before sowing)',
          'DAP: 50 kg + SSP: 100 kg (P + S + Ca)',
          'MOP: 30 kg (early K)',
          'Zinc sulphate: 10 kg or Zn-EDTA: 1 kg (one application)',
          'Phosphogypsum: 200 kg (especially in saline patches)',
          'Urea: 25 kg (starter N — full vegetative dose comes later)',
        ],
      },
      { type: 'h3', text: 'Vegetative phase (25–50 days)' },
      {
        type: 'ul',
        items: [
          'Urea: 40 kg at 30 days as side-dress',
          'Foliar 19:19:19 at 5 g/L at 35 and 45 days',
          'Foliar boron (Solubor) at 1 g/L at 40 days — primes square formation',
        ],
      },
      { type: 'h3', text: 'Flowering and boll formation (50–95 days) — the make-or-break window' },
      {
        type: 'ul',
        items: [
          'Urea: 30 kg at 55 days, 25 kg at 75 days (avoid late N spikes)',
          'MOP: 50 kg at 60 days as side-dress',
          'Fertigation (where available): 13:00:45 at 3 kg/acre weekly from 55 to 90 days',
          'Foliar 13:00:45 at 5 g/L every 10–15 days during peak flowering',
          'Foliar boron (Solubor) at 1 g/L at 60 and 75 days — boron-deficient plants drop 30–50% of bolls',
          'Magnesium sulphate foliar at 1% if inter-veinal yellowing appears',
        ],
      },
      { type: 'h3', text: 'Boll development and maturation (95–170 days)' },
      {
        type: 'ul',
        items: [
          'Stop nitrogen by 100 days',
          'MOP: 30 kg final top-dress at 100 days (boll weight comes from K)',
          'Fertigate 13:00:45 at 3 kg/acre weekly to 130 days',
          'Foliar 00:52:34 at 5 g/L at 110 and 125 days — boosts boll opening, lint quality',
          'Calcium nitrate foliar at 2 g/L every 15 days — improves fibre strength',
        ],
      },
      {
        type: 'callout',
        title: 'The boron rule',
        body: 'Boron deficiency is the #1 hidden yield-killer in Indian cotton. Symptoms (cracked stems, shed squares) only appear after the damage is done. Apply boron prophylactically at squaring and again at peak flowering — even if the soil test shows "sufficient." Boron is mobile in soil, immobile in plant.',
      },
      { type: 'h2', text: 'Pest-stressed crop nutrition' },
      {
        type: 'p',
        html: 'Cotton under sucking-pest pressure (jassid, thrips, whitefly) cannot uptake nutrients efficiently — the leaf surface is compromised. After any insecticide spray, follow up within 24–48 hours with a foliar of 19:19:19 + Zn + B to compensate for the photosynthetic loss.',
      },
      { type: 'h2', text: 'Reading the plant' },
      {
        type: 'table',
        headers: ['Symptom', 'Likely cause', 'Action'],
        rows: [
          ['Pale yellow lower leaves', 'Nitrogen', 'Urea 2% foliar + side-dress'],
          ['Reddish-bronze leaves', 'Phosphorus or potassium', 'Foliar 13:40:13 or 13:00:45'],
          ['Yellow leaf margins, scorched tips', 'Potassium', 'MOP + foliar 00:00:50'],
          ['Cracked stems, hollow squares', 'Boron', 'Solubor 1 g/L foliar, immediate'],
          ['White streaks on young leaves', 'Zinc', 'Zn-EDTA 0.5 g/L foliar'],
          ['Square / boll shedding (no insect damage)', 'B + K + Ca shortage', 'Boron + 13:00:45 + Ca foliar'],
        ],
      },
      {
        type: 'productRef',
        intro: 'The fertigation grades that carry a cotton crop through flowering and boll fill:',
        slugs: [
          'fertisol-npk-19-19-19',
          'fertisol-npk-13-00-45',
          'fertisol-zn-edta-12',
        ],
      },
      { type: 'h2', text: 'Bottom line' },
      {
        type: 'p',
        html: 'Most cotton yield is decided between days 50 and 100. Front-load phosphorus and zinc in the base. Use the vegetative window to build the canopy. Then go heavy on potassium and boron from flowering onwards. A boron + 13:00:45 foliar programme during peak bloom is the single highest-ROI intervention in cotton nutrition.',
      },
    ],
    relatedProductSlugs: [
      'fertisol-npk-19-19-19',
      'fertisol-npk-13-00-45',
      'fertisol-zn-edta-12',
    ],
  },
  {
    slug: 'wheat',
    crop: 'Wheat',
    title: 'Wheat Fertilizer Schedule — Field Nutrition Plan for North & Central India',
    description:
      'Complete wheat fertilizer schedule for Indian conditions — sowing-time NPK, split nitrogen for tillering and panicle initiation, sulphur, zinc and foliar grade-K for grain weight.',
    keywords: [
      'wheat fertilizer',
      'wheat NPK schedule',
      'wheat nutrition',
      'split nitrogen wheat',
      'wheat sulphur',
      'grain filling',
    ],
    cover: '/content/guide-wheat.jpg',
    excerpt:
      'Wheat is forgiving until grain fill — then a single missed potassium top-dress can cost 4–6 quintals per acre. Get the splits right and the rest of the schedule almost runs itself.',
    growthDuration: '120–145 days',
    season: 'Rabi (November–April)',
    regions: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Gujarat'],
    sections: [
      { type: 'h2', text: 'Yield-defining stages' },
      {
        type: 'table',
        headers: ['Stage', 'Days', 'What is happening', 'Priority'],
        rows: [
          ['CRI (crown root initiation)', '20–25', 'Tiller buds set', 'N, P, water'],
          ['Tillering', '25–55', 'Multiple shoots per plant', 'N, K, S'],
          ['Jointing / booting', '55–80', 'Stem elongation, panicle inside', 'N, K, Mg'],
          ['Heading / flowering', '80–95', 'Grain number set', 'B, K — sensitive window'],
          ['Grain filling', '95–125', 'Starch deposition, weight gain', 'K, S, foliar urea'],
        ],
      },
      { type: 'h2', text: 'Standard recommended dose per acre (irrigated wheat)' },
      { type: 'h3', text: 'At sowing (basal)' },
      {
        type: 'ul',
        items: [
          'FYM: 4 tonnes (incorporated 2–3 weeks before sowing)',
          'DAP: 65 kg (P + 12 kg N)',
          'MOP: 25 kg (early K)',
          'Single super phosphate: 50 kg (additional S and Ca)',
          'Zinc sulphate: 10 kg or Zn-EDTA: 0.5 kg',
          'Urea: 35 kg as starter N',
        ],
      },
      { type: 'h3', text: 'First top-dress — at CRI / first irrigation (20–25 days)' },
      {
        type: 'ul',
        items: [
          'Urea: 50 kg, broadcast just before irrigation',
          'If late-sown: add 15 kg urea (compensates for shorter tillering window)',
        ],
      },
      { type: 'h3', text: 'Second top-dress — late tillering / second irrigation (45–55 days)' },
      {
        type: 'ul',
        items: [
          'Urea: 50 kg',
          'MOP: 25 kg (especially on sandy or light-textured soils)',
          'Foliar 19:19:19 at 5 g/L if tillering looks weak',
        ],
      },
      { type: 'h3', text: 'Booting to heading (65–85 days) — quiet but important' },
      {
        type: 'ul',
        items: [
          'Foliar 19:19:19 at 5 g/L at booting (70 days)',
          'Foliar boron (Solubor) at 0.5 g/L — improves grain set, especially in late-sown crops',
          'Foliar potassium nitrate (13:00:45) at 5 g/L — early start to grain-fill nutrition',
        ],
      },
      { type: 'h3', text: 'Grain filling (95–125 days) — the silent yield maker' },
      {
        type: 'ul',
        items: [
          'Foliar urea at 2% (20 g/L) at milking stage — directly boosts protein content',
          'Foliar 13:00:45 at 5 g/L at 100 and 115 days — grain weight depends on K supply now',
          'Foliar magnesium sulphate at 1% if older leaves show inter-veinal yellowing',
        ],
      },
      {
        type: 'callout',
        title: 'Late-sown wheat needs more N — but split it tighter',
        body: 'For wheat sown after 25 November (Indo-Gangetic plains) or after 5 December (central India), the tillering window shrinks. Increase total N by 15–20% but split into 3 top-dresses instead of 2 — early, mid-tillering, jointing. A single large late top-dress lodges the crop and drops yield.',
      },
      { type: 'h2', text: 'Sulphur — the most underestimated nutrient' },
      {
        type: 'p',
        html: 'Sulphur is the fourth major nutrient for wheat — needed at roughly 25% of N. Modern high-purity urea and MOP contribute almost no S. SSP, ammonium sulphate, gypsum and phosphogypsum are the practical sources.',
      },
      {
        type: 'p',
        html: 'A sulphur-deficient wheat crop looks "almost fine" — slightly pale, slightly thinner straw — but the yield gap can hit 15–20%. If you have ever applied perfect NPK and still got disappointing yield, sulphur is the first thing to check.',
      },
      { type: 'h2', text: 'Zinc — apply once every 3 years' },
      {
        type: 'p',
        html: 'Wheat is highly responsive to zinc, especially on calcareous and recently leveled soils. A single 10 kg ZnSO₄ application at sowing protects the crop for 2–3 seasons. Symptoms (white streaks, stunted plants) appear at tillering — by then it is too late for soil application; use foliar Zn-EDTA at 0.5 g/L.',
      },
      { type: 'h2', text: 'Field deficiency cues' },
      {
        type: 'table',
        headers: ['Symptom', 'Likely cause', 'Action'],
        rows: [
          ['Yellow older leaves, slow tillering', 'Nitrogen', 'Urea top-dress before irrigation'],
          ['Purpling on stems and leaf bases', 'Phosphorus', 'Foliar 13:40:13'],
          ['Yellow margins, scorched tips, weak straw', 'Potassium', 'MOP + foliar 13:00:45'],
          ['Pale crop overall, no other symptom', 'Sulphur', 'SSP top-dress + foliar AS'],
          ['White streaks on middle leaves, stunting', 'Zinc', 'Zn-EDTA 0.5 g/L foliar'],
          ['Hollow stem, distorted ear', 'Boron', 'Solubor 0.5 g/L at booting'],
        ],
      },
      {
        type: 'productRef',
        intro: 'Water-soluble grades for the foliar and irrigation programme:',
        slugs: [
          'fertisol-npk-19-19-19',
          'fertisol-npk-13-00-45',
          'fertisol-zn-edta-12',
        ],
      },
      { type: 'h2', text: 'Bottom line' },
      {
        type: 'p',
        html: 'A good wheat schedule is 70% about timing and 30% about quantity. Get the splits right (basal + 2 top-dresses for normal sowing, 3 for late sowing), include sulphur in the base, do not skip zinc, and run a foliar 13:00:45 programme during grain filling. That is the recipe for 22+ quintals per acre on most North Indian soils.',
      },
    ],
    relatedProductSlugs: [
      'fertisol-npk-19-19-19',
      'fertisol-npk-13-00-45',
      'fertisol-zn-edta-12',
    ],
  },
];

export function getCropGuide(slug: string): CropGuide | undefined {
  return cropGuides.find((g) => g.slug === slug);
}
