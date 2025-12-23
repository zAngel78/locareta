import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MagneticEffect from "./MagneticEffect";

const BurgerMenuBtn = ({ isOpen, onClick }) => {
  useGSAP(() => {
    if (isOpen) {
      gsap.to(".burger-line-before", {
        rotate: 45,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(".burger-line-after", {
        rotate: -45,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(".burger-line-before", {
        rotate: 0,
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(".burger-line-after", {
        rotate: 0,
        y: 8,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <MagneticEffect strength={0.5}>
      <button
        onClick={onClick}
        className="relative w-20 h-20 rounded-full bg-white border border-black/10 cursor-pointer transition-all duration-300 hover:scale-105"
        aria-label="Menu"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="burger-line-before absolute w-8 h-0.5 bg-black rounded-full" style={{ transform: 'translateY(-8px)' }}></div>
          <div className="burger-line-after absolute w-8 h-0.5 bg-black rounded-full" style={{ transform: 'translateY(8px)' }}></div>
        </div>
      </button>
    </MagneticEffect>
  );
};

export default BurgerMenuBtn;
