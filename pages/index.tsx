import Head from 'next/head';
import ModernHeader from '@/components/ModernHeader';
import ModernHero from '@/components/ModernHero';
import ModernFeatured from '@/components/ModernFeatured';
import CollectionsGrid from '@/components/CollectionsGrid';
import ServiceHighlights from '@/components/ServiceHighlights';
import Testimonials from '@/components/Testimonials';
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
      </Head>
      
      <div className="min-h-screen bg-white font-sans text-brand-dark">
        <ModernHeader />
        
        <main>
          <ModernHero />
          <CollectionsGrid />
          <ModernFeatured />
          <ServiceHighlights />
          <ModernStats />
          <Testimonials />
          <ModernNewsletter />
        </main>

        <FooterModern />
      </div>
    </>
  );
}
