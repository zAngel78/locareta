import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FooterSection = () => {
  useGSAP(() => {
    gsap.from(".footer-content > *", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h3 className="text-4xl font-bold text-white uppercase tracking-tight">
            Portfolio
          </h3>
          <p className="text-white/60 mt-2 font-paragraph">
            UI/UX Designer & Creative Professional
          </p>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="#" className="social-btn" aria-label="LinkedIn">
            <span className="text-white font-bold">in</span>
          </a>
          <a href="#" className="social-btn" aria-label="Dribbble">
            <span className="text-white font-bold">dr</span>
          </a>
          <a href="#" className="social-btn" aria-label="Behance">
            <span className="text-white font-bold">be</span>
          </a>
          <a href="#" className="social-btn" aria-label="Twitter">
            <span className="text-white font-bold">tw</span>
          </a>
          <a href="#" className="social-btn" aria-label="Instagram">
            <span className="text-white font-bold">ig</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#home" className="text-white/60 hover:text-red transition-colors font-paragraph uppercase text-sm">
            Home
          </a>
          <a href="#about" className="text-white/60 hover:text-red transition-colors font-paragraph uppercase text-sm">
            About
          </a>
          <a href="#projects" className="text-white/60 hover:text-red transition-colors font-paragraph uppercase text-sm">
            Projects
          </a>
          <a href="#services" className="text-white/60 hover:text-red transition-colors font-paragraph uppercase text-sm">
            Services
          </a>
          <a href="#contact" className="text-white/60 hover:text-red transition-colors font-paragraph uppercase text-sm">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright-box">
          <p className="text-white/50 text-sm font-paragraph">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-white/50 text-sm font-paragraph">
            Designed with GSAP + React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
