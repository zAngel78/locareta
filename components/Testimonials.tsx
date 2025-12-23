import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-3 mb-8">
              Trusted by the world's most discerning clients.
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Our commitment to excellence has earned us the trust of homeowners, investors, and developers worldwide. We don't just facilitate transactions; we build lasting relationships.
            </p>
            
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-brand-dark">4.9/5</div>
                <div className="flex text-brand-accent mt-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <div className="text-sm text-slate-400 mt-1">Customer Rating</div>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl font-bold text-brand-dark">2.5k+</div>
                <div className="text-sm text-slate-400 mt-1">Reviews Verified</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl"></div>
            <div className="bg-slate-50 p-10 rounded-3xl relative z-10 border border-slate-100">
              <div className="flex gap-1 text-brand-accent mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="font-serif text-xl text-brand-dark italic mb-8 leading-relaxed">
                "The level of professionalism and attention to detail was outstanding. RealHome didn't just find us a house; they found us a home that perfectly matched our lifestyle. Highly recommended for anyone looking for luxury real estate."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-brand-dark">Eleanor Pena</div>
                  <div className="text-sm text-slate-500">Property Investor, NY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
