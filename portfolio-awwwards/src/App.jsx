import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import MarqueeSection from "./sections/MarqueeSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  // ScrollSmoother disabled - conflicts with pin animations
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 2,
  //     effects: true,
  //     smoothTouch: 0.1,
  //   });
  // });

  return (
    <main className="min-h-full">
      <NavBar />
      <HeroSection />

      {/* Grouped sections with dark background - Card effect */}
      <div className="dark-card-section rounded-t-[3rem] bg-[#0B0B0A] py-[5%]" style={{ backgroundColor: '#0B0B0A' }}>
        <MarqueeSection />
        <ProjectsSection />
        <ServicesSection />
      </div>

      <AboutSection />
      
      {/* Testimonials with negative margin for overlap effect */}
      <TestimonialsSection />
      
      {/* Contact section with card effect transition */}
      <div className="contact-card-section relative rounded-t-[3rem] bg-main-bg pt-[5%]">
        <ContactSection />
      </div>
      
      <FooterSection />
    </main>
  );
};

export default App;
