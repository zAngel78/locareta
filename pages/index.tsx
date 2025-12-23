import Head from 'next/head';
import DualNavbar from '@/components/DualNavbar';
import ModernHero from '@/components/ModernHero';
import ModernFeatured from '@/components/ModernFeatured';
import CollectionsGrid from '@/components/CollectionsGrid';
import ServiceHighlights from '@/components/ServiceHighlights';
import TestimonialsAwwwards from '@/components/TestimonialsAwwwards';
import ModernStats from '@/components/ModernStats';
import ModernNewsletter from '@/components/ModernNewsletter';
import FooterModern from '@/components/FooterModern';

export default function Home() {
  return (
    <>
      <Head>
        <title>RealHome | Luxury Real Estate & Exclusive Homes</title>
        <meta name="description" content="Discover extraordinary homes and luxury real estate. Buy, rent, or sell with RealHome - the standard in modern living." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          * {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
          }
        `}</style>
      </Head>
      
      <div className="min-h-screen bg-white font-sans text-brand-dark">
        <DualNavbar />
        
        <main>
          <ModernHero />
          
          {/* Grouped sections with background - creates the card effect */}
          <div className="relative z-10 rounded-t-[3rem] md:rounded-t-[6rem] lg:rounded-t-[8rem] bg-white shadow-2xl pt-16" style={{ backgroundColor: '#ffffff' }}>
            <CollectionsGrid />
            <ModernFeatured />
            <ServiceHighlights />
            <ModernStats />
          </div>
          
          {/* Testimonials section with scroll animations */}
          <TestimonialsAwwwards />
          
          {/* Newsletter section - simple transition */}
          <div className="relative z-10 bg-white pt-24 pb-0">
            <ModernNewsletter />
          </div>
        </main>

        <FooterModern />
      </div>
    </>
  );
}
