import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ParticlesBackground from "../components/ParticlesBackground";

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  useGSAP(() => {
    // Split text animation for main title
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    // Fade in hero content
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      // Clip-path reveal for subtitle box
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      // Character animation for subtitle inside box
      .from(
        ".hero-text-scroll h1",
        {
          yPercent: 100,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // Hero scroll animation - scale down with rounded corners and fade out
    gsap.to(".hero-container", {
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      opacity: 0,
      scale: 0.85,
      borderRadius: "2rem",
      ease: "none",
    });
  });

  return (
    <section id="home" style={{ marginBottom: '-100vh', paddingTop: 0, paddingBottom: 0 }}>
      <div className="sticky top-0 hero-container will-change-auto px-4 md:px-6">
        {/* Particles Background */}
        <ParticlesBackground />

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Amazing Portfolio</h1>
          </div>

          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>UI/UX Designer</h1>
            </div>
          </div>

          <h2>
            Creating exceptional digital experiences through thoughtful design
            and innovative solutions that captivate and inspire users.
          </h2>

          <div className="hero-button">
            <p>View My Work</p>
          </div>
        </div>
      </div>

      {/* Spacer for scroll */}
      <div style={{ height: '100vh' }}></div>
    </section>
  );
};

export default HeroSection;
