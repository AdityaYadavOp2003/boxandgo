export interface City {
  slug: string;
  name: string;
  state: string;
  description: string;
  landmarks: string[];
  areas: string[];
}

export const cities: City[] = [
  {
    slug: 'nagpur',
    name: 'Nagpur',
    state: 'Maharashtra',
    description: 'As our home city, we provide the most comprehensive packers and movers services in Nagpur. With deep local knowledge and an extensive network, we ensure seamless relocations across all areas of Nagpur and beyond.',
    landmarks: ['Sitabuldi Fort', 'Deekshabhoomi', 'Futala Lake', 'Zero Mile', 'Ambazari Lake'],
    areas: ['Dharampeth', 'Sadar', 'Sitabuldi', 'Wathoda', 'Manish Nagar', 'Wardha Road', 'Hingna', 'Koradi', 'Kamptee', 'Besa'],
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'Professional packers and movers services in Mumbai. We handle the unique challenges of moving in India\'s financial capital — from high-rise apartments to narrow lane access with expertise and care.',
    landmarks: ['Gateway of India', 'Marine Drive', 'Bandra-Worli Sea Link', 'CST Station', 'Powai Lake'],
    areas: ['Andheri', 'Bandra', 'Powai', 'Thane', 'Navi Mumbai', 'Borivali', 'Goregaon', 'Malad', 'Dadar', 'Churchgate'],
  },
  {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    description: 'Reliable packers and movers in Pune serving the Oxford of the East. Whether you\'re relocating for IT jobs, education, or personal reasons, our Pune team delivers exceptional moving services.',
    landmarks: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort', 'Dagdusheth Halwai Temple'],
    areas: ['Hinjewadi', 'Kharadi', 'Wakad', 'Baner', 'Viman Nagar', 'Hadapsar', 'Kothrud', 'Pimpri-Chinchwad', 'Magarpatta', 'Aundh'],
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    description: 'Top-rated packers and movers in Hyderabad. From the historic Old City to the modern IT corridors of HITEC City, we provide reliable and affordable moving solutions across Hyderabad.',
    landmarks: ['Charminar', 'Golconda Fort', 'Hussain Sagar', 'HITEC City', 'Ramoji Film City'],
    areas: ['HITEC City', 'Gachibowli', 'Madhapur', 'Banjara Hills', 'Jubilee Hills', 'Kondapur', 'Kukatpally', 'Secunderabad', 'Miyapur', 'Manikonda'],
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    description: 'Trusted packers and movers in Bangalore, India\'s Silicon Valley. We specialize in IT professional relocations and handle everything from studio apartments to large family homes with equal care.',
    landmarks: ['Lalbagh', 'Cubbon Park', 'Vidhana Soudha', 'Bangalore Palace', 'UB City'],
    areas: ['Whitefield', 'Electronic City', 'Koramangala', 'HSR Layout', 'Indiranagar', 'Marathahalli', 'Sarjapur', 'Hebbal', 'Jayanagar', 'BTM Layout'],
  },
];

export const allServiceCities = [
  'Nagpur', 'Mumbai', 'Pune', 'Hyderabad', 'Bangalore',
  'Chennai', 'Delhi', 'Gurgaon', 'Noida',
];
