export interface HomeService {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

/** Homepage service cards — relocation-focused offering */
export const homeServices: HomeService[] = [
  {
    slug: 'household-shifting',
    title: 'Home Relocation',
    description:
      'End-to-end residential moves with expert packing, careful handling, and setup at your new home.',
    icon: 'Home',
  },
  {
    slug: 'office-relocation',
    title: 'Office Relocation',
    description:
      'Planned corporate relocations with minimal downtime for IT, furniture, and confidential documents.',
    icon: 'Building2',
  },
  {
    slug: 'household-shifting',
    title: 'Packing & Unpacking',
    description:
      'Premium packing materials and systematic unpacking so every item arrives safe and organized.',
    icon: 'Package',
  },
  {
    slug: 'loading-unloading',
    title: 'Loading & Unloading',
    description:
      'Trained crews and proper equipment for safe loading, transit protection, and careful unloading.',
    icon: 'PackageOpen',
  },
  {
    slug: 'bike-transportation',
    title: 'Bike Transportation',
    description:
      'Door-to-door bike and two-wheeler transport with inspection, insurance, and GPS-tracked carriers.',
    icon: 'Bike',
  },
  {
    slug: 'warehousing-storage',
    title: 'Storage Solutions',
    description:
      'Secure short- and long-term storage with 24/7 surveillance and flexible retrieval options.',
    icon: 'Warehouse',
  },
];
