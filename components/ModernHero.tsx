import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight } from 'lucide-react';

export default function ModernHero() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sold'>('buy');

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Modern Architecture" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Premium Real Estate
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Curating the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                Exceptional.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Discover a portfolio of the world's most extraordinary homes, designed for those who seek more than just a place to live.
            </p>
          </motion.div>

          {/* Advanced Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-2 rounded-2xl shadow-2xl max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-2">
              {/* Tabs */}
              <div className="flex bg-slate-100 p-1 rounded-xl md:w-auto">
                {['buy', 'rent', 'sold'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`flex-1 md:flex-none px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
                      activeTab === tab 
                        ? 'bg-white text-brand-dark shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex-1 relative group bg-slate-50 md:bg-transparent rounded-xl md:rounded-none">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-brand-accent transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="City, Neighborhood, or Address" 
                  className="w-full h-full pl-12 pr-4 py-4 md:py-0 bg-transparent outline-none text-brand-dark placeholder:text-slate-400 font-medium"
                />
              </div>

              {/* Search Button */}
              <button className="bg-brand-dark hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </motion.div>
    </section>
  );
}
