import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function FooterModern() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-tr-xl rounded-bl-xl bg-brand-dark text-white flex items-center justify-center">
                <span className="font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-brand-dark">RealHome</span>
            </Link>
            <p className="text-slate-500 mb-8 leading-relaxed max-w-sm">
              Elevating the real estate experience with modern technology and timeless service. We connect extraordinary people with extraordinary properties.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-dark hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-brand-dark mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-brand-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-brand-dark mb-6 text-lg">Discover</h4>
            <ul className="space-y-4">
              {['New York Penthouses', 'Miami Waterfront', 'Los Angeles Estates', 'Chicago Lofts', 'New Developments'].map((item) => (
                <li key={item}>
                  <Link href="/search" className="text-slate-500 hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-accent transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-brand-dark mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-500">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-brand-accent">
                  <MapPin size={20} />
                </div>
                <span>123 Real Estate Blvd,<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-4 text-slate-500">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-brand-accent">
                  <Phone size={20} />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 text-slate-500">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-brand-accent">
                  <Mail size={20} />
                </div>
                <span>hello@realhome.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} RealHome Luxury Real Estate. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <Link href="#" className="hover:text-brand-dark">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-dark">Terms of Service</Link>
            <Link href="#" className="hover:text-brand-dark">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
