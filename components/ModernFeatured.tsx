import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Bed, Bath, Maximize } from 'lucide-react';
import { properties } from '@/data/properties';

export default function ModernFeatured() {
  // Ensure we have properties to display
  const featuredProperties = properties ? properties.filter(p => p.featured).slice(0, 3) : [];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs md:text-sm">Exclusive Listings</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mt-2 md:mt-3 mb-3 md:mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-xl">
              Handpicked properties that represent the finest in luxury living, architecture, and design.
            </p>
          </div>
          <Link href="/search" className="group flex items-center gap-2 text-brand-dark text-sm md:text-base font-bold hover:text-brand-accent transition-colors border-b-2 border-transparent hover:border-brand-accent pb-1 whitespace-nowrap">
            View All Properties
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/property/${property.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand-dark uppercase tracking-wider shadow-sm">
                    {property.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium flex items-center gap-2">
                      View Details <ArrowRight size={16} />
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-accent transition-colors line-clamp-1">
                        {property.title}
                      </h3>
                      <p className="text-slate-500 text-sm">{property.address}, {property.city}</p>
                    </div>
                  </div>
                  
                  <p className="text-2xl font-bold text-brand-dark mb-6">{property.price}</p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Bed size={18} className="text-slate-400" />
                      <span className="text-sm font-medium">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Bath size={18} className="text-slate-400" />
                      <span className="text-sm font-medium">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Maximize size={18} className="text-slate-400" />
                      <span className="text-sm font-medium">{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
