export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  review: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    city: 'Nagpur',
    rating: 5,
    review: 'Excellent service! Box & Go Movers made our household shifting completely stress-free. The team was professional, on-time, and extremely careful with our belongings. Highly recommend!',
    service: 'Household Shifting',
  },
  {
    id: 2,
    name: 'Priya Deshmukh',
    city: 'Mumbai',
    rating: 5,
    review: 'We relocated our entire office from Andheri to BKC with zero downtime. The planning and execution by Box & Go Movers was absolutely flawless. Best movers in Mumbai!',
    service: 'Office Relocation',
  },
  {
    id: 3,
    name: 'Amit Patel',
    city: 'Pune',
    rating: 5,
    review: 'Shifted my 3BHK apartment from Pune to Bangalore. Everything arrived safely, even the glass showpieces. Their packing quality is top-notch. Very reasonable pricing too.',
    service: 'Domestic Relocation',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    city: 'Hyderabad',
    rating: 5,
    review: 'Shifted my Honda Activa from Hyderabad to Pune. The scratch-proof packaging and custom crating were excellent — my bike arrived in perfect condition. Highly recommend!',
    service: 'Bike Transportation',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    city: 'Delhi',
    rating: 4,
    review: 'Used their warehousing service for 3 months during our home renovation. The facility was clean, secure, and climate-controlled. Retrieved everything in perfect condition.',
    service: 'Warehousing & Storage',
  },
  {
    id: 6,
    name: 'Ananya Krishnan',
    city: 'Bangalore',
    rating: 5,
    review: 'As a single woman moving cities, safety was my top priority. The Box & Go team was respectful, courteous, and incredibly efficient. They made my Bangalore to Chennai move seamless.',
    service: 'Domestic Relocation',
  },
  {
    id: 7,
    name: 'Mohammed Farooq',
    city: 'Chennai',
    rating: 5,
    review: 'Shifted my Royal Enfield from Chennai to Nagpur. The custom crating was impressive — not even a minor scratch on my bike. Will definitely use again for my next move.',
    service: 'Bike Transportation',
  },
  {
    id: 8,
    name: 'Kavita Joshi',
    city: 'Nagpur',
    rating: 5,
    review: 'Local shifting within Nagpur was done in just 4 hours! The team was energetic, careful, and very polite. Affordable pricing with no hidden charges. Truly the best in Nagpur.',
    service: 'Local Shifting',
  },
];
