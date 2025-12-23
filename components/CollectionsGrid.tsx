import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const collections = [
  {
    title: "Waterfront Living",
    count: "124 Properties",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    size: "large",
    searchQuery: "waterfront"
  },
  {
    title: "Urban Penthouses",
    count: "45 Properties",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
    size: "small",
    searchQuery: "penthouse"
  },
  {
    title: "Modern Villas",
    count: "89 Properties",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    size: "small",
    searchQuery: "villa"
  },
  {
    title: "Historic Estates",
    count: "32 Properties",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=800",
    size: "wide",
    searchQuery: "estate"
  }
];

export default function CollectionsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-3 md:mb-4">
              Curated Collections
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-xl">
              Explore our hand-picked selections of properties by lifestyle and architectural style.
            </p>
          </div>
          <Link href="/search" className="hidden md:flex items-center gap-2 text-brand-dark font-bold hover:text-brand-accent transition-colors whitespace-nowrap">
            View All Collections <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* First Column */}
          <Link href={`/search?q=${collections[0].searchQuery}`} className="md:col-span-1 h-[300px] md:h-full relative group overflow-hidden rounded-2xl cursor-pointer">
            <img 
              src={collections[0].image} 
              alt={collections[0].title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium text-white/80 mb-1">{collections[0].count}</p>
              <h3 className="text-2xl font-bold">{collections[0].title}</h3>
            </div>
          </Link>

          {/* Second Column (Split) */}
          <div className="md:col-span-1 flex flex-col gap-6 h-full">
            <Link href={`/search?q=${collections[1].searchQuery}`} className="flex-1 relative group overflow-hidden rounded-2xl cursor-pointer">
              <img 
                src={collections[1].image} 
                alt={collections[1].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium text-white/80 mb-1">{collections[1].count}</p>
                <h3 className="text-2xl font-bold">{collections[1].title}</h3>
              </div>
            </Link>
            <Link href={`/search?q=${collections[2].searchQuery}`} className="flex-1 relative group overflow-hidden rounded-2xl cursor-pointer">
              <img 
                src={collections[2].image} 
                alt={collections[2].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium text-white/80 mb-1">{collections[2].count}</p>
                <h3 className="text-2xl font-bold">{collections[2].title}</h3>
              </div>
            </Link>
          </div>

          {/* Third Column */}
          <Link href={`/search?q=${collections[3].searchQuery}`} className="md:col-span-1 h-[300px] md:h-full relative group overflow-hidden rounded-2xl cursor-pointer">
            <img 
              src={collections[3].image} 
              alt={collections[3].title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium text-white/80 mb-1">{collections[3].count}</p>
              <h3 className="text-2xl font-bold">{collections[3].title}</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
