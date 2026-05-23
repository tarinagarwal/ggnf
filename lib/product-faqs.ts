export type FAQ = { question: string; answer: string };

export const productFaqs: Record<string, FAQ[]> = {
  'fertisol-npk-19-19-19': [
    {
      question: 'What is the best dose of NPK 19:19:19 for foliar application?',
      answer:
        'For most crops, 4–5 g per litre of water (40–50 g per spray pump). Spray early morning or after 4 PM, avoiding direct sun. For drip fertigation, 3–5 kg per acre per week through the vegetative phase.',
    },
    {
      question: 'Is Fertisol NPK 19:19:19 safe for drip irrigation systems?',
      answer:
        'Yes. It is 100% water-soluble with less than 0.5% insoluble matter, so it dissolves cleanly without clogging drip emitters. Always flush the system with plain water after every fertigation.',
    },
    {
      question: 'Which crops benefit most from 19:19:19?',
      answer:
        'It is the universal grade — suitable for almost every crop during the vegetative phase. It performs especially well on tomato, capsicum, banana, grape, pomegranate, polyhouse vegetables, cotton, sugarcane, wheat and paddy.',
    },
    {
      question: 'Can I mix NPK 19:19:19 with pesticides in the same tank?',
      answer:
        'Generally yes with most foliar insecticides and fungicides, but always do a jar-test first: mix small quantities, wait 30 minutes, and check for precipitation. Never mix with strongly alkaline products like Bordeaux mixture.',
    },
    {
      question: 'How is this different from domestic NPK mixture fertilizers?',
      answer:
        'Domestic NPK mixtures are formulated for broadcast application to soil — they are partially soluble at best. Fertisol 19:19:19 is engineered to international water-soluble spec, meaning every gram dissolves and reaches the plant via drip or foliar.',
    },
  ],

  'fertisol-npk-13-40-13': [
    {
      question: 'When should I apply NPK 13:40:13?',
      answer:
        'Use it during early vegetative growth and transplanting — the high phosphorus (40%) drives strong root establishment. Typical window: from transplant to 30 days, then switch to a balanced grade like 19:19:19.',
    },
    {
      question: 'What is the recommended dose for transplanting?',
      answer:
        'Drench seedlings or transplants with 5 g per litre solution at the time of planting. For fertigation, 3–4 kg per acre per week for the first 3–4 weeks after planting.',
    },
    {
      question: 'Can 13:40:13 replace DAP at the base dose?',
      answer:
        'Only partially — DAP is granular and meant for broadcast application as a base dose. Fertisol 13:40:13 is a water-soluble grade meant for drip or foliar use during early growth. Use DAP for the base and 13:40:13 for the early-stage fertigation.',
    },
    {
      question: 'Is the phosphorus in 13:40:13 fully available?',
      answer:
        'Yes — the phosphorus is in the form of mono-ammonium phosphate, which is 100% water-soluble and immediately plant-available, unlike rock phosphate or partial-citrate forms.',
    },
  ],

  'fertisol-npk-13-00-45': [
    {
      question: 'What is potassium nitrate used for?',
      answer:
        'It is the standard for flowering, fruit-set and fruit-fill stages — high potassium (45%) plus nitrate-form nitrogen drives flowering quality, fruit weight, sugar/sucrose loading and post-harvest shelf life.',
    },
    {
      question: 'When should I switch from 19:19:19 to 13:00:45?',
      answer:
        'When the first flowers or fruit appear on the crop. From that point through harvest, alternate or switch fully — depending on crop. For grape, pomegranate and tomato, 13:00:45 is the primary grade from flowering onwards.',
    },
    {
      question: 'Why is it called potassium nitrate?',
      answer:
        'Because the potassium is supplied as KNO₃ (potassium nitrate) — which is chloride-free and ideal for chloride-sensitive crops like grape, tobacco, mango, citrus and most vegetables. Cheap potash sources (MOP) contain chloride that damages these crops.',
    },
    {
      question: 'What is the foliar dose for fruit crops?',
      answer:
        'For grape, pomegranate, tomato, capsicum: 5 g per litre, sprayed every 7–10 days from flowering to a week before harvest. Always early morning or late afternoon.',
    },
  ],

  'fertisol-npk-20-20-20': [
    {
      question: 'How is 20:20:20 different from 19:19:19?',
      answer:
        'Just slightly higher concentration of each nutrient (60% NPK total vs 57%). Both are balanced grades. 20:20:20 is more common in greenhouse and nursery operations where the small concentration difference matters; 19:19:19 dominates in open-field fertigation.',
    },
    {
      question: 'Is 20:20:20 suitable for nursery seedlings?',
      answer:
        'Yes — it is the preferred grade for nursery and polyhouse nutrition because of its balanced ratio and clean dissolution. Dose: 2–3 g per litre, applied every 5–7 days through the irrigation system.',
    },
    {
      question: 'Can it be used as a soil drench?',
      answer:
        'Yes. Mix 5 g per litre and drench the root zone weekly. Most effective during transplant establishment and rapid vegetative growth.',
    },
  ],

  'fertisol-zn-edta-12': [
    {
      question: 'What is the difference between zinc sulphate and zinc EDTA?',
      answer:
        'Zinc sulphate (ZnSO₄) contains 21–33% zinc but most of it gets locked up in the soil within days. Zinc EDTA contains 12% zinc, but the EDTA molecule protects it — making nearly all of it available to the plant. In practice, 1 kg of Zn-EDTA delivers as much usable zinc as 20+ kg of zinc sulphate.',
    },
    {
      question: 'What is the foliar dose?',
      answer:
        '0.5 to 1 g per litre of water (50–100 g per spray pump). Always early morning or after 4 PM. Visible greening typically appears within 3–5 days.',
    },
    {
      question: 'Which crops respond most to zinc?',
      answer:
        'Wheat, paddy, maize, cotton, sugarcane, citrus, grape and most vegetables are highly zinc-responsive. Pulses (gram, pigeonpea, soybean) also show strong yield response. Recently leveled fields and calcareous soils are especially deficient.',
    },
    {
      question: 'Can it be applied to soil?',
      answer:
        'Yes — soil dose is 0.5 to 1 kg per acre, applied through fertigation or banded near the root zone. Soil application gives 6–8 weeks of zinc supply.',
    },
    {
      question: 'Will it work on alkaline soil?',
      answer:
        'EDTA is stable up to pH 7.5. For more alkaline soils (pH above 7.5–8.0), DTPA-chelated zinc is more appropriate. Test your soil pH first.',
    },
  ],

  'super-gold-phosphogypsum': [
    {
      question: 'What is phosphogypsum used for?',
      answer:
        'It is a calcium and sulphur source that reclaims sodic, saline and alkaline soils. The calcium displaces sodium from clay particles, restoring soil structure and water infiltration. Most cost-effective intervention for problem soils.',
    },
    {
      question: 'What is the application rate per acre?',
      answer:
        'Mildly sodic soil: 200–400 kg per acre, once per year. Moderately sodic (ESP 15–25%): 500–800 kg per season for 2 years. Severely sodic (ESP > 25%): 1000–1500 kg per season for 3 years. Get a soil ESP test before heavy application.',
    },
    {
      question: 'How is it applied?',
      answer:
        'Broadcast uniformly 15–20 days before sowing, incorporate into the top 10–15 cm with a cultivator, then irrigate heavily within a week. The leaching irrigation is what carries the displaced sodium out of the root zone.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'Crusts soften within weeks. Visible yield response on bare patches: 10–20% in the first year, 20–40% by year two as soil structure recovers. Full reclamation of severely sodic soils takes 3 seasons.',
    },
    {
      question: 'Is Super Gold phosphogypsum safe for agricultural use?',
      answer:
        'Yes. Our phosphogypsum is sourced from approved Indian DAP plants and is fully compliant with the Fertilizer Control Order for agricultural application. It also contributes secondary phosphorus and sulphur to the crop.',
    },
    {
      question: 'Can phosphogypsum be mixed with urea or other fertilizers?',
      answer:
        'Avoid same-day application with urea or ammonium sulphate — wait at least 7 days between phosphogypsum incorporation and any nitrogen fertilizer top-dress.',
    },
  ],

  'sampurna-organic-manure': [
    {
      question: 'What is the NPK content of Sampurna organic manure?',
      answer:
        'Sampurna delivers balanced NPK along with 14% total organic carbon — designed to build long-term soil fertility, not replace water-soluble fertilizers in the short term. It works alongside chemical fertilizers, not against them.',
    },
    {
      question: 'How much organic manure per acre?',
      answer:
        '500 kg to 1 tonne per acre, broadcast and incorporated 2–3 weeks before sowing. For high-value horticultural crops, 1–2 tonnes per acre annually.',
    },
    {
      question: 'Can I use Sampurna with chemical fertilizers?',
      answer:
        'Yes — and it is the recommended approach. Sampurna improves soil structure, water-holding capacity and microbial life, which in turn improves the efficiency of any chemical fertilizer applied afterwards.',
    },
    {
      question: 'Is this suitable for organic certification?',
      answer:
        'Sampurna is a quality organic manure formulation. For specific certification bodies (NPOP, USDA Organic, etc.), check with your certifier — input lists vary.',
    },
  ],

  'fertisol-calcium-nitrate-boron': [
    {
      question: 'When is calcium nitrate with boron used?',
      answer:
        'During flowering and fruit development in calcium-sensitive crops — tomato (prevents blossom-end rot), apple, grape, pomegranate, capsicum, watermelon. The boron co-application improves pollen viability and fruit set.',
    },
    {
      question: 'What is the foliar dose?',
      answer:
        '2–3 g per litre, sprayed every 10–15 days from flowering through fruit fill. Do not mix with phosphate or sulphate fertilizers in the tank — calcium precipitates.',
    },
    {
      question: 'Why combine calcium with boron?',
      answer:
        'Calcium and boron work synergistically in cell wall formation and pollen-tube growth. Either alone is insufficient for fruit-set in many crops; together they cover both pollination and post-set fruit quality.',
    },
    {
      question: 'Is this for soil or foliar application?',
      answer:
        'Primarily foliar — calcium is poorly mobile in plants, so direct leaf and fruit application is far more effective than soil application. Soil application of calcium nitrate is also possible, at 5–10 kg per acre via fertigation.',
    },
  ],
};

export function getProductFaqs(slug: string): FAQ[] {
  return productFaqs[slug] || [];
}
