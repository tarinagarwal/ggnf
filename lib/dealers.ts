export type DealerLocation = {
  slug: string;
  city: string;
  state: string;
  cityState: string;
  servingRegion: string;
  title: string;
  description: string;
  keywords: string[];
  hero: string;
  intro: string;
  cropsCovered: string[];
  localChallenges: { title: string; body: string }[];
  recommendedProducts: string[];
  faqs: { question: string; answer: string }[];
  geo?: { lat: number; lng: number };
};

export const dealers: DealerLocation[] = [
  {
    slug: 'ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    cityState: 'Ahmedabad, Gujarat',
    servingRegion: 'Ahmedabad, Gandhinagar, Kheda, Anand and surrounding districts',
    title: 'Fertilizer Dealer & Supplier in Ahmedabad — GGNF',
    description:
      'Green Gujarat Natural Fertilizer is an imported fertilizer manufacturer, marketer and supplier based in Odhav, Ahmedabad. Water-soluble NPK, chelated micronutrients, phosphogypsum and organic manures — wholesale and retail for dealers and farmers across Gujarat.',
    keywords: [
      'fertilizer dealer Ahmedabad',
      'fertilizer supplier Ahmedabad',
      'water soluble NPK Ahmedabad',
      'chelated micronutrient Gujarat',
      'imported fertilizer Gujarat',
      'phosphogypsum dealer Ahmedabad',
    ],
    hero: '/brand/logo.jpg',
    intro:
      'Our packing and marketing facility is in Bileshwar Industrial Estate-2, Odhav — central to the Ahmedabad fertilizer trade. We serve farmers and dealers across central Gujarat directly, with same-day pickup available for orders placed before noon.',
    cropsCovered: [
      'Cotton',
      'Castor',
      'Wheat',
      'Bajra',
      'Cumin',
      'Fennel',
      'Pomegranate',
      'Banana',
      'Mango',
      'Vegetables',
    ],
    localChallenges: [
      {
        title: 'Saline pockets in central Gujarat',
        body: 'Belts around Dholka, Bavla and Sanand have well-documented sodic patches where conventional NPK underperforms. Phosphogypsum (Super Gold) at 400–800 kg per acre is the standard intervention — we supply both retail and bulk truckloads.',
      },
      {
        title: 'Alkaline irrigation water',
        body: 'Bore water across much of north Ahmedabad district runs pH 7.8–8.4. For zinc and iron corrections, DTPA-chelated micros work where EDTA fails. Always test water pH before deciding the chelate.',
      },
      {
        title: 'Cotton boron deficiency',
        body: 'Cotton acreage around Viramgam and Dhandhuka regularly shows hidden boron deficiency — visible only as boll shedding at flowering. We recommend prophylactic boron foliars at squaring; ask our team for the dosage chart.',
      },
    ],
    recommendedProducts: [
      'fertisol-npk-19-19-19',
      'fertisol-npk-13-00-45',
      'fertisol-zn-edta-12',
      'super-gold-phosphogypsum',
      'sampurna-organic-manure',
    ],
    faqs: [
      {
        question: 'Where is the GGNF office in Ahmedabad?',
        answer:
          'Our facility is at 12, Bileshwar Industrial Estate-2, Opposite G.V.V.M., Kathwada Road, Odhav, Ahmedabad 382415. Open Monday to Saturday, 9 AM to 7 PM IST.',
      },
      {
        question: 'Do you offer dealership opportunities in Gujarat?',
        answer:
          'Yes. We onboard dealers across Gujarat with competitive trade margins, dealer kits, and on-pack price-list transparency. Call +91-90091-69444 or email greengujratnaturalfertilizer@gmail.com for the dealer enquiry form.',
      },
      {
        question: 'Can I buy directly as a farmer?',
        answer:
          'Yes, direct retail is available at our Odhav facility. For larger orders or delivery to your village, we can route you to your nearest authorised dealer.',
      },
      {
        question: 'What is the minimum order for dealers?',
        answer:
          'Starter dealer kits begin at one carton per product category. Bulk pricing kicks in at full pallet quantities — call us with your district and crop mix and we will share the schedule.',
      },
    ],
    geo: { lat: 23.036, lng: 72.664 },
  },
  {
    slug: 'indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    cityState: 'Indore, Madhya Pradesh',
    servingRegion: 'Indore, Dewas, Ujjain, Dhar and the Malwa plateau',
    title: 'Fertilizer Supplier in Indore — GGNF Dealers Across Malwa',
    description:
      'Green Gujarat Natural Fertilizer supplies water-soluble NPK, chelated micronutrients and soil conditioners to dealers and farmers across Indore, Dewas, Ujjain and the Malwa region. Direct dispatch from Ahmedabad, trade margins and dealer kits available.',
    keywords: [
      'fertilizer dealer Indore',
      'water soluble NPK Indore',
      'soybean fertilizer Madhya Pradesh',
      'Malwa fertilizer supplier',
      'chelated micronutrient Indore',
      'fertilizer wholesaler Indore',
    ],
    hero: '/products/product_05.png',
    intro:
      'The Malwa plateau is one of central India\'s most productive agricultural belts — soybean, wheat, cotton, garlic and onion all grow at scale. GGNF supplies imported water-soluble fertilizers and chelated micronutrients to dealers across Indore, Dewas, Ujjain, Dhar, Ratlam and Mandsaur.',
    cropsCovered: [
      'Soybean',
      'Wheat',
      'Cotton',
      'Garlic',
      'Onion',
      'Potato',
      'Maize',
      'Gram',
      'Mustard',
      'Vegetables',
    ],
    localChallenges: [
      {
        title: 'Soybean sulphur deficiency',
        body: 'Malwa\'s black cotton soils are progressively sulphur-depleted after decades of soybean cultivation. Bentonite sulphur or phosphogypsum at 100–200 kg per acre at sowing routinely lifts soybean yield by 2–3 quintals per acre.',
      },
      {
        title: 'Garlic and onion boron need',
        body: 'High-value garlic and onion crops around Indore and Mandsaur are highly responsive to boron at bulb initiation. A single Solubor foliar at 1 g/L can change bulb-size grade — and price realization.',
      },
      {
        title: 'Wheat zinc deficiency on leveled fields',
        body: 'Recently leveled or re-graded wheat fields routinely show zinc deficiency in the first 2–3 years. ZnSO₄ at 10 kg per acre at sowing, or Zn-EDTA at 0.5 g/L as foliar, restores yield.',
      },
    ],
    recommendedProducts: [
      'fertisol-npk-19-19-19',
      'fertisol-npk-13-40-13',
      'fertisol-zn-edta-12',
      'super-gold-phosphogypsum',
    ],
    faqs: [
      {
        question: 'Does GGNF have a dealer in Indore?',
        answer:
          'We are actively onboarding dealers in Indore, Dewas, Ujjain and across the Malwa region. Call +91-90091-69444 to be connected with the nearest authorised dealer, or to apply for a new dealership.',
      },
      {
        question: 'How is delivery handled from Ahmedabad to Indore?',
        answer:
          'Standard road dispatch is 36–48 hours. For dealer orders, freight is included above pallet-level quantities; smaller orders ship via standard transporters.',
      },
      {
        question: 'Are GGNF products suitable for soybean-wheat rotation?',
        answer:
          'Yes. Our recommended schedule includes phosphogypsum at sowing (for sulphur), Fertisol 13:40:13 for early root establishment, and zinc EDTA correction in both crops. Ask for our soybean-wheat rotation guide.',
      },
      {
        question: 'Do you provide application advice for local crops?',
        answer:
          'Yes. Our technical team supports dealers and large farmers directly. Share your soil test and crop plan — we will share a stage-wise schedule customised for your conditions.',
      },
    ],
  },
  {
    slug: 'nagpur',
    city: 'Nagpur',
    state: 'Maharashtra',
    cityState: 'Nagpur, Maharashtra',
    servingRegion: 'Nagpur, Wardha, Amravati, Yavatmal and the Vidarbha region',
    title: 'Cotton & Orange Belt Fertilizer Supplier in Nagpur — GGNF',
    description:
      'Green Gujarat Natural Fertilizer supplies imported water-soluble NPK, chelated micronutrients and soil conditioners across Nagpur and the Vidarbha cotton-orange belt. Dealer enquiries welcome from Nagpur, Wardha, Amravati, Yavatmal and surrounding districts.',
    keywords: [
      'fertilizer dealer Nagpur',
      'cotton fertilizer Vidarbha',
      'orange fertilizer Nagpur',
      'water soluble NPK Vidarbha',
      'fertilizer supplier Maharashtra',
      'chelated micronutrient Nagpur',
    ],
    hero: '/products/product_03.png',
    intro:
      'Vidarbha is India\'s most concentrated cotton belt — and also the country\'s premier mandarin orange (Nagpur santra) growing region. Both crops are heavy users of potassium, sulphur, boron and zinc. GGNF supplies the imported water-soluble grades and chelated micronutrients these high-value crops need.',
    cropsCovered: [
      'Cotton',
      'Soybean',
      'Orange (Mandarin)',
      'Pigeonpea (Tur)',
      'Wheat',
      'Gram',
      'Sorghum',
      'Sugarcane',
      'Vegetables',
    ],
    localChallenges: [
      {
        title: 'Cotton boll shedding at flowering',
        body: 'Vidarbha cotton classically loses 25–40% of bolls between flowering and harvest. The cause is rarely pest pressure alone — it is potassium + boron deficiency at peak bloom. Fertisol 13:00:45 fertigation every 10 days plus Solubor foliar at squaring and flowering keeps boll retention high.',
      },
      {
        title: 'Orange fruit drop and granulation',
        body: 'Nagpur mandarin orchards show high pre-harvest drop and granulation when calcium, boron and potassium run short during fruit fill. A combined Ca + B + K-nitrate foliar programme from 90 days after fruit set forward is standard.',
      },
      {
        title: 'Pigeonpea and gram zinc response',
        body: 'Pulses across Vidarbha respond strongly to zinc application — both as a basal ZnSO₄ dose and as Zn-EDTA foliar at flowering. Underfertilized pulses are common; protein content and yield both improve with chelated zinc.',
      },
    ],
    recommendedProducts: [
      'fertisol-npk-19-19-19',
      'fertisol-npk-13-00-45',
      'fertisol-zn-edta-12',
      'fertisol-calcium-nitrate-boron',
    ],
    faqs: [
      {
        question: 'Where can I buy GGNF products in Nagpur?',
        answer:
          'We are onboarding dealers across Nagpur and Vidarbha. Call +91-90091-69444 for the nearest authorised dealer, or to apply for a dealership in your district.',
      },
      {
        question: 'Which fertilizers do you recommend for Vidarbha cotton?',
        answer:
          'Base dose of DAP + SSP + phosphogypsum at sowing, urea splits through tillering and squaring, and Fertisol 13:00:45 with Solubor (boron) foliars from flowering through boll fill. Our full cotton schedule is available on the Crop Guides page.',
      },
      {
        question: 'Do you supply to orange (santra) growers?',
        answer:
          'Yes — calcium nitrate with boron, potassium nitrate (13:00:45), and chelated micronutrients are all part of our orange-orchard programme. Ask our team for the season-wise schedule.',
      },
      {
        question: 'What is the delivery time from Ahmedabad to Nagpur?',
        answer:
          'Standard road transport is 48–72 hours. Dealer orders at pallet quantities ship with freight included.',
      },
    ],
  },
];

export function getDealer(slug: string): DealerLocation | undefined {
  return dealers.find((d) => d.slug === slug);
}
