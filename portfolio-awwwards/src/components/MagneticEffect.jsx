import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MagneticEffect = ({ children, strength = 0.3 }) => {
  const magneticRef = useRef(null);

  useGSAP(() => {
    const element = magneticRef.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * strength);
      yTo(y * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <div ref={magneticRef} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
};

export default MagneticEffect;
