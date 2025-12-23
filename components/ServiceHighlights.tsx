import { Home, Key, TrendingUp, Shield } from 'lucide-react';

const services = [
  {
    icon: <Home size={32} />,
    title: "Buy a Home",
    description: "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Sell a Home",
    description: "No matter what path you take to sell your home, we can help you navigate a successful sale with expert guidance."
  },
  {
    icon: <Key size={32} />,
    title: "Rent a Home",
    description: "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent."
  },
  {
    icon: <Shield size={32} />,
    title: "Property Management",
    description: "Trust your investment with the best. Our premium management services ensure your property is maintained to the highest standards."
  }
];

export default function ServiceHighlights() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="font-serif text-4xl font-bold text-brand-dark mt-3 mb-6">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-slate-500 text-lg">
            Whether you're buying, selling, or investing, our team of dedicated professionals is here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
