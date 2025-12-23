import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import BurgerMenuBtn from "./BurgerMenuBtn";
import MenuPattern from "./MenuPattern";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav-logo", {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out"
    });

    gsap.from(".nav-burger", {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      delay: 0.7,
      ease: "back.out(1.7)"
    });
  });

  useGSAP(() => {
    if (isMenuOpen) {
      // Open menu animation
      gsap.to(".menu-overlay", {
        opacity: 1,
        duration: 0.15,
        ease: "power2.out",
      });
      gsap.to(".fullscreen-menu", {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });

      // Reset and animate menu items
      gsap.set(".menu-item", { opacity: 0, y: 30 });
      gsap.to(".menu-item", {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.3,
        delay: 0.15,
        ease: "power2.out",
      });

      // Animate footer
      gsap.set(".menu-footer", { opacity: 0, y: 10 });
      gsap.to(".menu-footer", {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 0.25,
        ease: "power2.out",
      });
    } else {
      // Close menu animation
      gsap.to(".menu-overlay", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(".fullscreen-menu", {
        x: "100%",
        duration: 0.6,
        ease: "power4.inOut",
      });
      gsap.to(".menu-item, .menu-footer", {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  const menuItems = ["Home", "About", "Projects", "Services", "Testimonials", "Contact"];

  return (
    <>
      {/* Dark Overlay */}
      {isMenuOpen && (
        <div
          className="menu-overlay fixed inset-0 z-30 bg-black/50"
          style={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Minimalist Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-7 py-7 flex justify-between items-start">
          {/* Logo */}
          <div className="nav-logo pointer-events-auto">
            <h1 className="text-3xl font-bold uppercase tracking-tighter text-white">
              Portfolio
            </h1>
          </div>

          {/* Burger Menu Button */}
          <div className="nav-burger pointer-events-auto">
            <BurgerMenuBtn isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className="fullscreen-menu fixed top-[1vh] right-0 h-[98vh] w-[90%] sm:w-[70%] md:w-[55%] lg:w-[35%] xl:w-[30%] bg-zinc-950 z-40 rounded-l-2xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden"
        style={{ transform: "translateX(100%)" }}
      >
        {/* Background Pattern */}
        <MenuPattern />

        <div className="relative z-10 h-full flex flex-col justify-between py-8">
          <nav className="space-y-2 md:space-y-3 mt-12">
            {menuItems.map((item, index) => (
              <div key={index} className="overflow-hidden">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-item group flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase hover:text-red-600 transition-all duration-300 leading-tight py-2"
                >
                  <span className="w-3 h-3 rounded-full bg-red-600 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="-translate-x-6 group-hover:translate-x-0 transition-transform duration-300">
                    {item}
                  </span>
                </a>
              </div>
            ))}
          </nav>

          {/* Footer info in menu */}
          <div className="menu-footer flex flex-col gap-4 text-zinc-400 text-sm">
            <p className="text-xs uppercase font-semibold">Sígueme</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-600 transition-colors">Instagram</a>
              <a href="#" className="hover:text-red-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-red-600 transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
