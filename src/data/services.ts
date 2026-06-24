export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'household-shifting',
    title: 'Household Shifting Services',
    shortTitle: 'Household Shifting',
    description: 'Complete household shifting services with professional packing, safe loading, secure transportation, and careful unpacking. We handle everything from delicate glassware to heavy furniture with utmost care.',
    shortDescription: 'Safe and professional home relocation with complete packing, loading, transport, and unpacking services.',
    icon: 'Home',
    features: [
      'Complete household packing with quality materials',
      'Furniture disassembly and reassembly',
      'Safe handling of fragile and delicate items',
      'Dedicated moving team',
      'Door-to-door service',
      'Transit insurance coverage',
    ],
    process: [
      { step: 'Pre-Move Survey', description: 'Our team visits your home to assess items and provide an accurate quote.' },
      { step: 'Packing', description: 'Professional packing using high-quality materials for maximum protection.' },
      { step: 'Loading', description: 'Careful loading with proper arrangement to prevent any damage during transit.' },
      { step: 'Transportation', description: 'Safe and timely transportation in GPS-tracked vehicles.' },
      { step: 'Unloading & Setup', description: 'Careful unloading, unpacking, and arrangement at your new home.' },
    ],
    faqs: [
      { question: 'How much does household shifting cost?', answer: 'The cost depends on the volume of items, distance, and services required. We offer free surveys and transparent pricing with no hidden charges.' },
      { question: 'Do you provide packing materials?', answer: 'Yes, we use high-quality packing materials including corrugated boxes, bubble wrap, thermocol, foam sheets, and stretch wrap.' },
      { question: 'How long does household shifting take?', answer: 'Local shifting typically takes 1 day, while domestic relocation can take 3-7 days depending on the distance.' },
    ],
  },
  {
    slug: 'office-relocation',
    title: 'Office Relocation Services',
    shortTitle: 'Office Relocation',
    description: 'Minimize downtime with our professional office relocation services. We handle IT equipment, furniture, documents, and sensitive equipment with specialized care and systematic planning.',
    shortDescription: 'Seamless office moves with minimal downtime. We handle IT equipment, furniture, and documents safely.',
    icon: 'Building2',
    features: [
      'IT equipment packing and handling',
      'Office furniture disassembly and reassembly',
      'Document and file management',
      'Weekend and after-hours moving',
      'Floor plan layout assistance',
      'Minimal business downtime',
    ],
    process: [
      { step: 'Site Assessment', description: 'Detailed assessment of office space, inventory, and logistics requirements.' },
      { step: 'Planning', description: 'Comprehensive moving plan with timeline and resource allocation.' },
      { step: 'Packing & Labeling', description: 'Systematic packing with color-coded labeling for easy identification.' },
      { step: 'Transportation', description: 'Secure transport with proper handling of sensitive equipment.' },
      { step: 'Setup', description: 'Complete setup at the new office including furniture assembly and IT setup.' },
    ],
    faqs: [
      { question: 'Can you move over the weekend?', answer: 'Yes, we offer weekend and after-hours moving to minimize disruption to your business operations.' },
      { question: 'How do you handle IT equipment?', answer: 'We use anti-static packaging and specialized containers for IT equipment. Our team is trained in handling sensitive electronics.' },
      { question: 'Do you provide storage during office relocation?', answer: 'Yes, we offer temporary storage solutions if there is a gap between moving out and moving in.' },
    ],
  },
  {
    slug: 'local-shifting',
    title: 'Local Shifting Services',
    shortTitle: 'Local Shifting',
    description: 'Quick and affordable local shifting services within your city. Whether you are moving across the street or to a different neighborhood, we ensure a hassle-free experience.',
    shortDescription: 'Quick and affordable within-city moves. Same-day service available for urgent relocations.',
    icon: 'MapPin',
    features: [
      'Same-day shifting available',
      'Affordable within-city rates',
      'Small and large moves handled',
      'Flexible scheduling',
      'No hidden charges',
      'Professional labor team',
    ],
    process: [
      { step: 'Quick Assessment', description: 'Quick phone or in-person assessment to understand your needs.' },
      { step: 'Instant Quote', description: 'Get a transparent quote with no hidden charges.' },
      { step: 'Pack & Load', description: 'Swift packing and loading by our trained team.' },
      { step: 'Transport', description: 'Short-distance transport with careful handling.' },
      { step: 'Unload & Settle', description: 'Unloading and basic arrangement at your new place.' },
    ],
    faqs: [
      { question: 'Can I get same-day shifting?', answer: 'Yes, we offer same-day local shifting services subject to availability. Contact us early for the best scheduling.' },
      { question: 'What is the minimum charge?', answer: 'Our minimum charge starts from ₹2,000 for small local moves. The actual cost depends on volume and distance.' },
      { question: 'Do I need to be present during the move?', answer: 'We recommend being present or having a representative to oversee the move and sign off on delivery.' },
    ],
  },
  {
    slug: 'domestic-relocation',
    title: 'Domestic Relocation Services',
    shortTitle: 'Domestic Relocation',
    description: 'Pan-India domestic relocation services with complete end-to-end support. We cover all major cities and ensure safe delivery of your belongings across the country.',
    shortDescription: 'Pan-India moves covering all major cities with end-to-end support and tracking.',
    icon: 'Truck',
    features: [
      'Pan-India network coverage',
      'GPS-tracked vehicles',
      'Multi-modal transport options',
      'Real-time shipment tracking',
      'Transit insurance up to full value',
      'Dedicated move coordinator',
    ],
    process: [
      { step: 'Detailed Survey', description: 'Comprehensive home survey to create a detailed inventory list.' },
      { step: 'Custom Packing', description: 'Customized packing solutions based on item type and distance.' },
      { step: 'Secure Loading', description: 'Professional loading with proper weight distribution.' },
      { step: 'Interstate Transport', description: 'Safe transportation through our established pan-India network.' },
      { step: 'Delivery & Setup', description: 'Timely delivery with complete unpacking and arrangement services.' },
    ],
    faqs: [
      { question: 'How long does interstate shifting take?', answer: 'Interstate shifting typically takes 4-10 days depending on the distance between cities and route conditions.' },
      { question: 'Can I track my shipment?', answer: 'Yes, we provide real-time GPS tracking so you can monitor your shipment throughout the journey.' },
      { question: 'What if my items get damaged during transit?', answer: 'All items are covered under transit insurance. We handle claims promptly and ensure fair compensation.' },
    ],
  },
  {
    slug: 'bike-transportation',
    title: 'Bike Transportation Services',
    shortTitle: 'Bike Transportation',
    description: 'Professional bike and two-wheeler transportation across India. We ensure your bike is safely packed, loaded, and delivered without any scratches or damage.',
    shortDescription: 'Safe two-wheeler transport with proper crating and scratch-proof packaging.',
    icon: 'Bike',
    features: [
      'Custom wooden crating',
      'Scratch-proof packaging',
      'Door-to-door service',
      'Insurance coverage',
      'Tracking facility',
      'Handles all bike types',
    ],
    process: [
      { step: 'Pickup Scheduling', description: 'Schedule convenient pickup from your doorstep.' },
      { step: 'Inspection & Packing', description: 'Pre-transport inspection and professional packaging with protective materials.' },
      { step: 'Crating', description: 'Custom wooden crate construction for maximum protection.' },
      { step: 'Transportation', description: 'Safe transport via our dedicated two-wheeler carriers.' },
      { step: 'Delivery', description: 'Doorstep delivery with unpacking and final inspection.' },
    ],
    faqs: [
      { question: 'How is my bike packed for transport?', answer: 'Your bike is wrapped in bubble wrap, covered with foam padding, and placed in a custom wooden crate for maximum protection.' },
      { question: 'What documents do I need?', answer: 'You need the bike RC copy, insurance copy, and a valid ID proof. We handle all transport documentation.' },
      { question: 'How long does bike transport take?', answer: 'Typically 3-7 days depending on the distance. Express services are available for urgent requirements.' },
    ],
  },
  {
    slug: 'warehousing-storage',
    title: 'Warehousing & Storage Services',
    shortTitle: 'Warehousing & Storage',
    description: 'Secure and climate-controlled warehousing and storage solutions for your belongings. Whether you need short-term or long-term storage, our facilities are safe, clean, and monitored 24/7.',
    shortDescription: 'Secure, climate-controlled storage facilities with 24/7 CCTV surveillance.',
    icon: 'Warehouse',
    features: [
      '24/7 CCTV surveillance',
      'Climate-controlled facilities',
      'Pest control measures',
      'Flexible storage periods',
      'Easy access to your belongings',
      'Inventory management system',
    ],
    process: [
      { step: 'Assessment', description: 'Evaluate storage requirements based on volume and duration.' },
      { step: 'Packing', description: 'Professional packing for long-term storage protection.' },
      { step: 'Transportation', description: 'Safe transport of items to our storage facility.' },
      { step: 'Storage', description: 'Secure storage with regular maintenance and monitoring.' },
      { step: 'Retrieval', description: 'Easy retrieval and delivery whenever you need your items.' },
    ],
    faqs: [
      { question: 'What is the minimum storage period?', answer: 'We offer flexible storage starting from 1 month. Both short-term and long-term options are available.' },
      { question: 'Is my stuff safe in storage?', answer: 'Absolutely. Our facilities have 24/7 CCTV surveillance, security guards, fire safety systems, and pest control measures.' },
      { question: 'Can I access my items during storage?', answer: 'Yes, you can access your items with prior appointment during business hours.' },
    ],
  },
];
