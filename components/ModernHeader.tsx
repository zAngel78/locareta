import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Search, User, Globe, Map as MapIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Buy', href: '/search' },
    { name: 'Rent', href: '/search' },
    { name: 'Map Search', href: '/map' }, // Added Map Search
    { name: 'Sell', href: '#' },
    { name: 'New Developments', href: '#' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isHomePage && !isScrolled 
          ? 'bg-transparent border-transparent py-6' 
          : 'bg-white/95 backdrop-blur-md border-slate-100 shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded-tr-xl rounded-bl-xl flex items-center justify-center transition-colors shadow-lg ${
            isHomePage && !isScrolled ? 'bg-white text-brand-dark' : 'bg-brand-dark text-white'
          }`}>
            <span className="font-serif font-bold text-xl">R</span>
          </div>
          <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
            isHomePage && !isScrolled ? 'text-white' : 'text-brand-dark'
          }`}>
            RealHome
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-accent flex items-center gap-1 ${
                isHomePage && !isScrolled ? 'text-white/90' : 'text-slate-600'
              }`}
            >
              {item.name === 'Map Search' && <MapIcon size={14} />}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`p-2 rounded-full transition-colors ${
            isHomePage && !isScrolled 
              ? 'hover:bg-white/10 text-white' 
              : 'hover:bg-slate-100 text-slate-600'
          }`}>
            <Globe size={20} />
          </button>
          <div className={`h-6 w-px ${isHomePage && !isScrolled ? 'bg-white/20' : 'bg-slate-200'}`}></div>
          <button className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
            isHomePage && !isScrolled
              ? 'bg-white text-brand-dark hover:bg-slate-100' 
              : 'bg-brand-dark text-white hover:bg-slate-800'
          }`}>
            <User size={16} />
            <span>Sign In</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${
            isHomePage && !isScrolled ? 'text-white' : 'text-brand-dark'
          }`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b">
              <span className="font-serif text-xl font-bold text-brand-dark">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-brand-dark">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col p-6 gap-6">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-2xl font-serif text-brand-dark hover:text-brand-accent transition-colors flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="#"
                className="text-2xl font-serif text-brand-dark hover:text-brand-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agents
              </Link>
            </div>
            <div className="p-6 border-t bg-slate-50">
              <button className="w-full py-4 bg-brand-dark text-white rounded-xl font-bold text-lg shadow-lg">
                Sign In / Register
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
