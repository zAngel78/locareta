export interface Property {
  id: number;
  title: string;
  price: string;
  priceValue: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'House' | 'Apartment' | 'Condo' | 'Villa';
  status: 'For Sale' | 'For Rent';
  image: string;
  featured?: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Waterfront Villa",
    price: "$2,450,000",
    priceValue: 2450000,
    address: "123 Ocean Drive",
    city: "Miami",
    state: "FL",
    zipCode: "33139",
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    type: "Villa",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600",
    featured: true,
    coordinates: { lat: 25.7617, lng: -80.1918 }
  },
  {
    id: 2,
    title: "Luxury Downtown Penthouse",
    price: "$1,850,000",
    priceValue: 1850000,
    address: "456 Skyline Ave",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    beds: 3,
    baths: 3,
    sqft: 2800,
    type: "Apartment",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
    featured: true,
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 3,
    title: "Contemporary Hills Estate",
    price: "$15,000/mo",
    priceValue: 15000,
    address: "789 Beverly Hills Dr",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90210",
    beds: 6,
    baths: 7,
    sqft: 6500,
    type: "House",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?auto=format&fit=crop&q=80&w=1600",
    featured: true,
    coordinates: { lat: 34.0736, lng: -118.4004 }
  },
  {
    id: 4,
    title: "Minimalist Desert Retreat",
    price: "$890,000",
    priceValue: 890000,
    address: "321 Palm Springs Way",
    city: "Palm Springs",
    state: "CA",
    zipCode: "92262",
    beds: 3,
    baths: 2,
    sqft: 1900,
    type: "House",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
    featured: false,
    coordinates: { lat: 33.8303, lng: -116.5453 }
  },
  {
    id: 5,
    title: "Historic Brownstone",
    price: "$3,200,000",
    priceValue: 3200000,
    address: "567 Beacon St",
    city: "Boston",
    state: "MA",
    zipCode: "02116",
    beds: 4,
    baths: 3.5,
    sqft: 3100,
    type: "House",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1600",
    featured: true,
    coordinates: { lat: 42.3601, lng: -71.0589 }
  },
  {
    id: 6,
    title: "Modern Loft",
    price: "$4,500/mo",
    priceValue: 4500,
    address: "890 Arts District",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
    beds: 1,
    baths: 1.5,
    sqft: 1200,
    type: "Apartment",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600",
    featured: false,
    coordinates: { lat: 41.8781, lng: -87.6298 }
  }
];
