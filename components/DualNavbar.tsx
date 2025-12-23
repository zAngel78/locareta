import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModernHeader from './ModernHeader';
import AwwwardsNavbar from './AwwwardsNavbar';

export default function DualNavbar() {
  const [showAwwwardsNav, setShowAwwwardsNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar cuando el usuario baja del hero (más de 100vh)
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Cambiar antes (al 70%) para que aparezca más rápido
      if (scrollPosition > viewportHeight * 0.7) {
        setShowAwwwardsNav(true);
      } else {
        setShowAwwwardsNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!showAwwwardsNav ? (
          <motion.div
            key="modern-header"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ModernHeader />
          </motion.div>
        ) : (
          <motion.div
            key="awwwards-navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AwwwardsNavbar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
