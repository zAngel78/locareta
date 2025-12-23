import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ModernHero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sold'>('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const heroContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero scroll animation - only scale down and fade out, keep it fixed
    gsap.to(heroContainerRef.current, {
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: false,
        pin: true, // Keep hero pinned while scrolling
        pinSpacing: false,
      },
      opacity: 0,
      scale: 0.9,
      ease: 'power2.inOut',
    });
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/map?location=${encodeURIComponent(searchQuery)}&status=${activeTab}`);
    } else {
      router.push('/map');
    }
  };

  return (
    <section style={{ marginBottom: '-100vh' }}>
      <div ref={heroContainerRef} className="sticky top-0 relative h-screen min-h-screen flex items-center justify-center" style={{ willChange: 'transform, opacity, border-radius' }}>
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ borderRadius: 'inherit' }}>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" style={{ borderRadius: 'inherit' }} />
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight px-4">
              Curating the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                Exceptional.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Discover a portfolio of the world's most extraordinary homes, designed for those who seek more than just a place to live.
            </p>
          </motion.div>

          {/* Advanced Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-2 sm:p-3 rounded-2xl shadow-2xl max-w-3xl mx-4 sm:mx-auto"
          >
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              {/* Tabs */}
              <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
                {['buy', 'rent', 'sold'].map((tab) => (
                  <button 
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab as any)}
                    className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wide transition-all ${
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
              <div className="flex-1 relative group bg-slate-50 sm:bg-transparent rounded-xl sm:rounded-none">
                <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-brand-accent transition-colors" size={18} />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="City, Neighborhood..." 
                  className="w-full h-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 md:py-0 bg-transparent outline-none text-brand-dark placeholder:text-slate-400 font-medium text-sm sm:text-base"
                />
              </div>

              {/* Search Button */}
              <button 
                type="submit"
                className="bg-brand-dark hover:bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] text-sm sm:text-base"
              >
                <Search size={18} className="sm:w-5 sm:h-5" />
                <span>Search</span>
              </button>
            </form>
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
      </div>
      
      {/* Spacer for scroll effect */}
      <div style={{ height: '100vh' }}></div>
    </section>
  );
}
