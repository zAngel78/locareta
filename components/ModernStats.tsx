import { motion } from 'framer-motion';
import { Home, Users, Award, Globe } from 'lucide-react';

export default function ModernStats() {
  const stats = [
    { icon: <Home size={32} />, value: "2,500+", label: "Properties Sold" },
    { icon: <Users size={32} />, value: "98%", label: "Client Satisfaction" },
    { icon: <Globe size={32} />, value: "50+", label: "Cities Covered" },
    { icon: <Award size={32} />, value: "15", label: "Industry Awards" },
  ];

  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <svg width="100%" height="100%">
           <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
           </pattern>
           <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-5 rounded-2xl bg-white/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 transform group-hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-bold mb-3">{stat.value}</h3>
              <p className="text-white/60 font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
