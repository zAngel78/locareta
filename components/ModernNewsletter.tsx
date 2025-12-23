import { Send } from 'lucide-react';

export default function ModernNewsletter() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden text-center md:text-left">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">Newsletter</span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Unlock exclusive market insights.
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                Join our exclusive community to receive the latest luxury listings, off-market opportunities, and real estate trends directly to your inbox.
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex-1 max-w-md">
              <form className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:bg-white/10 focus:border-brand-accent transition-all backdrop-blur-sm"
                />
                <button className="w-full px-8 py-4 bg-brand-accent text-brand-dark rounded-xl font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
                  <span>Subscribe Now</span>
                  <Send size={18} />
                </button>
              </form>
              <p className="mt-4 text-xs text-slate-500 text-center lg:text-left">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
