import { ServiceItem, BridalPackage, GalleryItem, Testimonial } from '../types/salon';

import heroImg from '../assets/images/hero_luxury_salon_1791706565777.jpg';
import aboutImg from '../assets/images/about_salon_interior_1791706579790.jpg';
import bridalImg from '../assets/images/service_bridal_glamour_1791706592708.jpg';
import hairStylingImg from '../assets/images/service_hair_styling_1791706603317.jpg';
import facialImg from '../assets/images/gallery_facial_glow_1791706612999.jpg';
import nailArtImg from '../assets/images/service_nail_art_1791706644839.jpg';
import partyGlamImg from '../assets/images/service_party_glam_1791706658029.jpg';
import hairColorImg from '../assets/images/service_hair_color_1791706670178.jpg';

// Image asset paths imported for production bundling
export const SALON_IMAGES = {
  hero: heroImg,
  about: aboutImg,
  bridal: bridalImg,
  hairStyling: hairStylingImg,
  facial: facialImg,
  nailArt: nailArtImg,
  partyGlam: partyGlamImg,
  hairColor: hairColorImg,
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'bridal-makeup',
    name: 'Bespoke Bridal Makeup',
    category: 'bridal',
    tagline: 'Timeless South Asian bridal perfection',
    description: 'Our signature bridal makeup experience designed for Baraat, Nikah, and Walima ceremonies. Includes personalized skin prep, high-definition luxury pigments, lashes, dupatta setting, and jewelry placement.',
    duration: '3.5 Hours',
    price: 'From PKR 45,000',
    image: SALON_IMAGES.bridal,
    features: [
      'HD airbrush or matte velvet finish',
      'Custom lash mapping & eye contouring',
      'Dupatta draping & royal jewelry styling',
      'Touch-up kit & lip gloss gift'
    ],
    popular: true
  },
  {
    id: 'hair-styling',
    name: 'Master Hair Styling & Blowouts',
    category: 'hair',
    tagline: 'Signature Hollywood waves & couture updos',
    description: 'Transformative hair artistry tailored to your facial structure and outfit silhouette. From lush blowout volume and glossy waves to intricate bridal buns and floral braids.',
    duration: '60 - 90 Mins',
    price: 'From PKR 6,500',
    image: SALON_IMAGES.hairStyling,
    features: [
      'Heat protection with Moroccanoil & Kérastase',
      'Texturized long-lasting hold',
      'Hair filler & extensions integration available',
      'Luxury head massage wash ritual'
    ],
    popular: true
  },
  {
    id: 'hair-coloring',
    name: 'Custom Hair Coloring & Balayage',
    category: 'hair',
    tagline: 'Dimensional caramel, blonde & chocolate hues',
    description: 'Specialist color alchemy using ammonia-free European formulations. Multi-tonal balayage, soft baby lights, root melts, and gloss glazing that preserves hair integrity and luminous shine.',
    duration: '3 - 4 Hours',
    price: 'From PKR 22,000',
    image: SALON_IMAGES.hairColor,
    features: [
      'Olaplex bond repair built-in',
      'Ammonia-free gentle lightening',
      'Customized tone matching for warm undertones',
      'Complimentary gloss seal treatment'
    ],
    popular: true
  },
  {
    id: 'party-makeup',
    name: 'Party & Festive Glam Makeup',
    category: 'makeup',
    tagline: 'Radiant camera-ready looks for wedding guests',
    description: 'Stunning makeup tailored for dholaks, sangeets, receptions, and red-carpet gatherings. We blend flawless glass skin with captivating soft smoky eyes and hydrated nude or bold lips.',
    duration: '90 Mins',
    price: 'From PKR 15,000',
    image: SALON_IMAGES.partyGlam,
    features: [
      'Luminous dewy or soft matte base',
      'Premium mink-feel faux lashes',
      'Waterproof, sweat-proof lasting finish',
      'Expert setting for evening flash photography'
    ],
    popular: false
  },
  {
    id: 'facial-treatments',
    name: 'Advanced Facial & Glass Skin Aesthetics',
    category: 'skin',
    tagline: 'Clinical hydration & 24K gold radiance',
    description: 'Custom facial therapy addressing hyperpigmentation, texture, and dullness. Features medical-grade HydraFacials, oxygen infusion, lymphatic drainage, and 24K colloidal gold lifting.',
    duration: '75 Mins',
    price: 'From PKR 12,500',
    image: SALON_IMAGES.facial,
    features: [
      'Deep pore vacuum extraction & ultrasound',
      'Hyaluronic acid & peptide infusion',
      'Cooling cryo-globe lymphatic sculpting',
      'LED light phototherapy session'
    ],
    popular: true
  },
  {
    id: 'manicure-rituals',
    name: 'Couture Gel & French Manicure',
    category: 'nails',
    tagline: 'Precision Russian cuticle care & nail art',
    description: 'Impeccable hand pampering with dry Russian cuticle perfection, nourishing almond oil soak, organic sugar exfoliation, and chip-free gel polish with subtle gold foil or chrome accents.',
    duration: '60 Mins',
    price: 'From PKR 4,500',
    image: SALON_IMAGES.nailArt,
    features: [
      'Medical-grade autoclave sterilization',
      'Gentle non-damaging gel removal',
      'Deep nourishing collagen hand mask',
      'Champagne gold or pearlescent chrome art'
    ],
    popular: false
  },
  {
    id: 'pedicure-rituals',
    name: 'Rose Petal Royal Spa Pedicure',
    category: 'nails',
    tagline: 'Relaxing botanical soak & reflexology',
    description: 'Immerse your feet in warm rose water and Himalayan salts followed by organic peppermint scrub, callus smoothing, warm herbal towels, and relaxing foot reflexology massage.',
    duration: '75 Mins',
    price: 'From PKR 5,500',
    image: SALON_IMAGES.about,
    features: [
      'Fresh damask rose petal foot soak',
      'Intensive heel hydration balm',
      'Paraffin wax thermal dip',
      'Extended acupressure calf massage'
    ],
    popular: false
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: 'nikah-glow',
    name: 'The Nikah & Engagement Glow',
    subtitle: 'Soft, ethereal luminescence for intimate vows',
    price: 'PKR 35,000',
    duration: 'Single Event (Half Day)',
    bestFor: 'Nikah, Engagement & Ring Ceremonies',
    included: [
      'Signature soft dewy makeup by Senior Artist',
      'Romantic braided or half-up hair styling',
      'High-grade wispy lash enhancement',
      'Dupatta pinned and pleated to perfection',
      'Skin calming prep treatment prior to application'
    ],
    perks: [
      'Complimentary herbal green tea & macarons',
      'Private mirror dressing suite'
    ],
    featured: false
  },
  {
    id: 'signature-baraat',
    name: 'The Signature Baraat Bride',
    subtitle: 'The timeless regal statement by our Master Creative Director',
    price: 'PKR 60,000',
    duration: 'Full Event (Priority Suite)',
    bestFor: 'The Main Baraat Wedding Ceremony',
    included: [
      'Bespoke bridal couture makeup by Creative Director',
      'Royal traditional bridal updo with real jasmine gajras',
      'Master jewelry & matha patti lock-in',
      'Heavy zardozi dupatta framing & weight redistribution',
      'Full body shimmer & collarbone sculpting',
      'Bridal emergency kit (pins, lipstick touch-up, blotting sheets)'
    ],
    perks: [
      'Dedicated VIP Bridal Lounge with private vanity',
      'Complimentary express hand & foot glow prep',
      'Personal assistant attending until car departure'
    ],
    featured: true
  },
  {
    id: 'walima-radiance',
    name: 'The Royal Walima Radiance',
    subtitle: 'Modern high-fashion glam with champagne accents',
    price: 'PKR 50,000',
    duration: 'Single Event (Evening)',
    bestFor: 'Walima & Reception Galas',
    included: [
      'Modern glass-skin finish with soft metallic shimmer',
      'Voluminous Hollywood waves or contemporary textured bun',
      'Sculpted blush & tailored champagne highlighting',
      'Dupatta & western veil draping assistance',
      'High-definition photography light-check'
    ],
    perks: [
      'Luxury VIP suite access with family companion',
      'Complimentary hydrating eye rescue patches'
    ],
    featured: false
  },
  {
    id: 'grand-3day-suite',
    name: 'The Complete 3-Day Bridal Suite',
    subtitle: 'The ultimate royal experience for Mehendi, Baraat & Walima',
    price: 'PKR 135,000',
    duration: '3 Consecutive Events + Pre-Bridal Spa',
    bestFor: 'The Complete Wedding Week Experience',
    included: [
      'Day 1: Vibrant dewy Mehendi look with floral hair',
      'Day 2: Royal Signature Baraat look by Master Artist',
      'Day 3: Modern champagne Walima look with blowout',
      'Complete pre-bridal full body polish & HydraFacial (3 days prior)',
      'Complimentary Mother-of-the-Bride glam makeup on Baraat day'
    ],
    perks: [
      'Guaranteed private master suite for all 3 days',
      'Champagne mocktail & high-tea salon service',
      'Complimentary gel manicure & rose spa pedicure'
    ],
    featured: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'look-1',
    title: 'Royal Baraat Bridal Transformation',
    category: 'bridal',
    beforeImage: SALON_IMAGES.about,
    afterImage: SALON_IMAGES.bridal,
    description: 'Flawless velvet base with warm copper-gold eye contour, tailored specifically to complement antique gold zardozi embroidery.',
    stylist: 'Ayla R. · Master Bridal Specialist'
  },
  {
    id: 'look-2',
    title: 'Honey Caramel Balayage & Silk Waves',
    category: 'hair',
    beforeImage: SALON_IMAGES.hairColor,
    afterImage: SALON_IMAGES.hairStyling,
    description: 'Lifted from virgin dark brown to a multi-dimensional warm honey melt with Olaplex integrity preservation.',
    stylist: 'Danial K. · Senior Colorist'
  },
  {
    id: 'look-3',
    title: '24K Gold HydraFacial Glass Skin',
    category: 'skin',
    beforeImage: SALON_IMAGES.facial,
    afterImage: SALON_IMAGES.facial,
    description: 'Deep pore vacuum extraction and hyaluronic infusion revealing instant plum, hydrated glass radiance without downtime.',
    stylist: 'Zoya M. · Aesthetic Lead'
  },
  {
    id: 'look-4',
    title: 'Sangeet Night Soft Bronze Glamour',
    category: 'makeup',
    beforeImage: SALON_IMAGES.partyGlam,
    afterImage: SALON_IMAGES.partyGlam,
    description: 'Sculpted cheekbones, smokey cat-eye with mink lashes, and glossy nude ombre lips built to withstand humid dance floors.',
    stylist: 'Hiba S. · Celebrity Makeup Artist'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Zara Hameed',
    location: 'Gulberg III, Lahore',
    service: 'Signature Baraat Bridal Package',
    rating: 5,
    date: 'February 2026',
    review: 'Getting ready at Glamour was the calmest, most luxurious part of my wedding day. Ayla and her team took care of every pin, my heavy dupatta stayed secure for 8 hours, and my makeup looked as fresh at 2 AM as it did at 6 PM. Every guest asked who did my makeup!',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Mahnoor Tariq',
    location: 'DHA Phase 5, Lahore',
    service: 'Caramel Balayage & Gloss Finish',
    rating: 5,
    date: 'January 2026',
    review: 'I have naturally dry hair and was terrified of bleaching it. Danial did a thorough consultation, explaining every step. My balayage is rich, glossy, and completely seamlessly blended. The salon aesthetic is like stepping into a Paris boutique.',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Dr. Fatima Qureshi',
    location: 'Cantt, Lahore',
    service: 'HydraFacial & Rose Spa Pedicure',
    rating: 5,
    date: 'March 2026',
    review: 'The hygiene standards here are unmatched in Lahore. All nail tools came out of sealed sterilization pouches. The HydraFacial left my skin visibly glowing without any redness before my sister’s engagement.',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Aleena Rizvi',
    location: 'Model Town, Lahore',
    service: 'Party Glam & Hollywood Blowout',
    rating: 5,
    date: 'March 2026',
    review: 'Booked on short notice via WhatsApp and the reception team was exceptionally accommodating. They finished my look precisely on time and the blowout had unmatched bounce. Glamour is now my go-to salon in Lahore.',
    verified: true
  }
];
