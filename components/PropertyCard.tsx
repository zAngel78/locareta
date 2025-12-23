import Link from 'next/link';
import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  id?: number;
  image: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  status?: 'For Sale' | 'For Rent';
  type?: string;
}

export default function PropertyCard({
  id = 1,
  image,
  price,
  beds,
  baths,
  sqft,
  address,
  city,
  state,
  zipCode,
  status = 'For Sale',
  type
}: PropertyCardProps) {
  // Traducir estado para visualización
  const displayStatus = status === 'For Sale' ? 'En Venta' : 'En Renta';
  const statusColor = status === 'For Sale' ? 'bg-brand-dark text-white' : 'bg-brand-accent text-white';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <Link href={`/property/${id}`} className="relative aspect-[4/3] overflow-hidden block">
        <img 
          src={image} 
          alt={address} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md ${statusColor}`}>
          {displayStatus}
        </div>
        
        <button 
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 duration-300"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Heart size={18} />
        </button>

        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-medium flex items-center gap-1">
            <MapPin size={14} /> Ver en mapa
          </p>
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-bold text-brand-accent uppercase tracking-wide mb-1">{type || 'Residencial'}</p>
            <h3 className="text-xl font-bold text-brand-dark">{price}</h3>
          </div>
        </div>
        
        <div className="mb-4 flex-grow">
          <p className="font-medium text-slate-800 line-clamp-1">{address}</p>
          <p className="text-slate-500 text-sm">{city}, {state} {zipCode}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
          <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-1 text-slate-400 mb-1">
              <Bed size={16} />
            </div>
            <span className="text-sm font-semibold text-slate-700">{beds} <span className="text-xs font-normal text-slate-500">Hab</span></span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-1 text-slate-400 mb-1">
              <Bath size={16} />
            </div>
            <span className="text-sm font-semibold text-slate-700">{baths} <span className="text-xs font-normal text-slate-500">Baños</span></span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-1 text-slate-400 mb-1">
              <Maximize size={16} />
            </div>
            <span className="text-sm font-semibold text-slate-700">{sqft} <span className="text-xs font-normal text-slate-500">m²</span></span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
