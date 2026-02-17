export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  heroImage: string;
  thumbnail: string;
  description: string;
  details: string[];
  features: string[];
  images: string[];
}

export const services: ServiceData[] = [
  {
    slug: "kitchen",
    title: "Kitchen Remodeling",
    shortTitle: "Kitchen",
    heroImage: "/images/hero/kitchen-hero.jpg",
    thumbnail: "/images/kitchen/kitchen-1.jpg",
    description:
      "Transform your kitchen into the heart of your home. From custom cabinetry to stunning countertops, RJE delivers kitchens that blend beauty with function — tailored to the way you live and cook.",
    details: [
      "Whether you dream of a sleek modern kitchen or a warm traditional space, our design-build approach ensures every detail is thoughtfully planned and expertly executed.",
      "We handle everything from layout redesign and structural modifications to plumbing, electrical, custom cabinetry, countertop fabrication, tile work, and premium appliance installation.",
      "Our team works with you from concept through completion, ensuring your new kitchen reflects your personal style while maximizing storage, workflow, and natural light.",
    ],
    features: [
      "Custom cabinetry & storage solutions",
      "Granite, quartz & butcher block countertops",
      "Backsplash tile design & installation",
      "Kitchen island design & construction",
      "Under-cabinet & recessed lighting",
      "Plumbing & electrical upgrades",
      "Flooring replacement & refinishing",
      "Appliance selection & installation",
    ],
    images: Array.from({ length: 8 }, (_, i) => `/images/kitchen/kitchen-${i + 1}.jpg`),
  },
  {
    slug: "bath",
    title: "Bath Remodeling",
    shortTitle: "Bath",
    heroImage: "/images/bath/bath-1.jpg",
    thumbnail: "/images/bath/bath-2.jpg",
    description:
      "Create a spa-like retreat in your own home. RJE specializes in bathroom remodels that maximize space, improve accessibility, and elevate your daily routine with premium materials and expert craftsmanship.",
    details: [
      "From powder rooms to luxurious master baths, we design and build bathrooms that combine elegance with everyday practicality.",
      "Our comprehensive bathroom remodeling services include custom tile showers, freestanding tubs, double vanities, heated flooring, and ADA-compliant accessibility features.",
      "We manage all plumbing, electrical, waterproofing, and ventilation to ensure your new bathroom is as durable as it is beautiful.",
    ],
    features: [
      "Walk-in showers & frameless glass enclosures",
      "Custom tile design & installation",
      "Vanity & countertop selection",
      "Heated flooring systems",
      "Lighting design & fixtures",
      "Plumbing fixture upgrades",
      "Accessibility & ADA modifications",
      "Ventilation & moisture management",
    ],
    images: Array.from({ length: 8 }, (_, i) => `/images/bath/bath-${i + 1}.jpg`),
  },
  {
    slug: "basement",
    title: "Basement & General Contracting",
    shortTitle: "Basement",
    heroImage: "/images/basement/basement-1.jpg",
    thumbnail: "/images/basement/basement-3.jpg",
    description:
      "Unlock the hidden potential of your basement. Whether you envision a home theater, game room, guest suite, or home office, RJE transforms unfinished spaces into fully livable areas your family will love.",
    details: [
      "A finished basement is one of the best investments you can make in your home — adding livable square footage without the cost of an addition.",
      "Our team handles everything from waterproofing and insulation to framing, drywall, electrical, plumbing, flooring, and custom built-ins.",
      "We also offer general contracting services for any interior renovation project, ensuring professional management and quality craftsmanship from start to finish.",
    ],
    features: [
      "Basement waterproofing & moisture control",
      "Framing, insulation & drywall",
      "Egress windows & code compliance",
      "Home theater & entertainment areas",
      "Wet bars & kitchenettes",
      "Guest suite & bathroom additions",
      "Custom lighting & electrical work",
      "Flooring installation (LVP, tile, carpet)",
    ],
    images: Array.from({ length: 8 }, (_, i) => `/images/basement/basement-${i + 1}.jpg`),
  },
  {
    slug: "exterior",
    title: "Outdoor Living & Exterior",
    shortTitle: "Exterior",
    heroImage: "/images/hero/outdoor-living.jpg",
    thumbnail: "/images/exterior/exterior-1.jpg",
    description:
      "Extend your living space to the outdoors. From custom decks and patios to full outdoor kitchens, RJE creates outdoor environments designed for entertaining, relaxing, and enjoying every season.",
    details: [
      "Your outdoor space should be an extension of your home's personality. We design and build custom outdoor living areas that are both beautiful and built to withstand the elements.",
      "Our exterior services range from deck and patio construction to pergolas, outdoor kitchens, fire pits, and landscape-integrated hardscaping.",
      "Every project is built with premium weather-resistant materials and backed by our commitment to lasting quality.",
    ],
    features: [
      "Custom deck design & construction",
      "Patio & hardscape installation",
      "Outdoor kitchens & grilling stations",
      "Pergolas, gazebos & shade structures",
      "Fire pits & outdoor fireplaces",
      "Exterior lighting & electrical",
      "Fence & privacy screen installation",
      "Composite & natural wood decking",
    ],
    images: Array.from({ length: 8 }, (_, i) => `/images/exterior/exterior-${i + 1}.jpg`),
  },
  {
    slug: "roofing",
    title: "Roofing & Siding",
    shortTitle: "Roofing",
    heroImage: "/images/roofing/roofing-1.jpg",
    thumbnail: "/images/roofing/roofing-2.jpg",
    description:
      "Protect your home from the top down. RJE provides expert roofing and siding services that enhance your home's curb appeal, energy efficiency, and structural integrity.",
    details: [
      "Your roof and siding are your home's first line of defense. We deliver professional installation and repair services using industry-leading materials and techniques.",
      "From full roof replacements and storm damage repair to vinyl, fiber cement, and cedar siding installation, our crew ensures a watertight, beautiful finish every time.",
      "We also handle soffit, fascia, and gutter work to complete your home's exterior envelope.",
    ],
    features: [
      "Full roof replacement & repair",
      "Architectural shingle installation",
      "Vinyl & fiber cement siding",
      "Soffit, fascia & trim work",
      "Gutter installation & guards",
      "Storm damage assessment & repair",
      "Attic ventilation & insulation",
      "Energy-efficient material options",
    ],
    images: [
      ...Array.from({ length: 6 }, (_, i) => `/images/roofing/roofing-${i + 1}.jpg`),
      "/images/roofing/roofing-7.jpeg",
      "/images/roofing/roofing-8.png",
    ],
  },
  {
    slug: "additions",
    title: "Building Additions",
    shortTitle: "Additions",
    heroImage: "/images/additions/addition-1.jpg",
    thumbnail: "/images/additions/addition-3.jpg",
    description:
      "Need more space? RJE designs and builds seamless home additions that expand your living area while maintaining the architectural integrity of your existing home.",
    details: [
      "When your family outgrows your space, a home addition is the answer. We specialize in designing additions that blend seamlessly with your existing structure.",
      "From second-story additions and bump-outs to sunrooms and in-law suites, our design-build process ensures your new space looks and feels like it was always part of the original home.",
      "We handle all permitting, engineering, and construction — giving you a single point of contact from concept to completion.",
    ],
    features: [
      "Second-story additions",
      "Room bump-outs & extensions",
      "Sunrooms & four-season rooms",
      "In-law suites & guest quarters",
      "Garage additions & conversions",
      "Architectural design & engineering",
      "Permit management & code compliance",
      "Foundation & structural work",
    ],
    images: [
      ...Array.from({ length: 7 }, (_, i) => `/images/additions/addition-${i + 1}.jpg`),
      "/images/additions/addition-8.jpeg",
    ],
  },
  {
    slug: "insurance",
    title: "Insurance Claim Services",
    shortTitle: "Insurance",
    heroImage: "/images/hero/insurance-claim.jpg",
    thumbnail: "/images/insurance/insurance-1.jpg",
    description:
      "When disaster strikes, RJE is here to help you rebuild. We work directly with your insurance company to restore your home to its pre-loss condition — or better.",
    details: [
      "Dealing with property damage is stressful. Our insurance claim reconstruction team simplifies the process by managing the paperwork, communicating with adjusters, and handling all restoration work.",
      "We have extensive experience with fire, water, wind, and storm damage restoration. Our team understands the claims process inside and out, ensuring you receive fair compensation for repairs.",
      "From emergency board-up and temporary repairs to full structural reconstruction and finish work, we're with you every step of the way.",
    ],
    features: [
      "Direct insurance company coordination",
      "Damage assessment & documentation",
      "Fire & smoke damage restoration",
      "Water damage repair & remediation",
      "Wind & storm damage reconstruction",
      "Structural repairs & rebuilding",
      "Content pack-out & storage coordination",
      "Full interior & exterior restoration",
    ],
    images: Array.from({ length: 8 }, (_, i) => `/images/insurance/insurance-${i + 1}.jpg`),
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
