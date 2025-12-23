import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { skills } from "../constants";

gsap.registerPlugin(SplitText);

const AboutSection = () => {
  useGSAP(() => {
    // Section leave animation (scale down when leaving)
    gsap.to(".about-section", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "75% bottom",
        scrub: 1,
      },
      yPercent: -10,
      scale: 0.95,
      ease: "power1",
    });

    // Arrow animation from left
    gsap.from(".about-arrow", {
      scrollTrigger: {
        trigger: ".about-arrow",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      x: -100,
      duration: 0.4,
      ease: "power1.inOut",
    });

    // Title reveal with character animation
    const titleSplit = SplitText.create(".about-title-text", {
      type: "chars",
    });

    // Set initial state
    gsap.set(titleSplit.chars, {
      y: 100,
      opacity: 0,
    });

    gsap.to(titleSplit.chars, {
      scrollTrigger: {
        trigger: ".about-title-text",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      stagger: 0.01,
      duration: 1,
      ease: "power4.inOut",
    });

    // Image animation
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "power2.out",
    });

    // Main paragraph fade in
    gsap.from(".about-main-text", {
      scrollTrigger: {
        trigger: ".about-main-text",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
    });

    // Secondary text fade in
    gsap.from(".about-secondary-text", {
      scrollTrigger: {
        trigger: ".about-secondary-text",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });
  });

  return (
    <section
      id="about"
      className="about-section relative overflow-hidden rounded-b-3xl bg-[#0B0B0A] shadow-2xl px-6 md:px-12 py-32 md:py-40 lg:py-48 mb-0 will-change-auto"
      style={{ minHeight: "120vh" }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        {/* Title Grid */}
        <div className="grid grid-cols-12 gap-8 mb-20 md:mb-32">
          {/* Arrow */}
          <div className="hidden md:block md:col-span-4 overflow-hidden">
            <svg
              className="about-arrow w-20 h-20 text-zinc-400"
              stroke="currentColor"
              fill="none"
              strokeWidth="1.25"
              viewBox="6 6 12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="7" x2="17" y2="17"></line>
              <polyline points="17 7 17 17 7 17"></polyline>
            </svg>
          </div>

          {/* Title */}
          <div className="col-span-12 md:col-span-8">
            <div className="overflow-hidden">
              <h2 className="about-title-text text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none text-zinc-200">
                Programmer, Developer, Web-animator/
              </h2>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-12 md:gap-16">
          {/* Image */}
          <div className="col-span-12 md:col-span-4 pointer-events-none select-none">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
              alt="Profile"
              className="about-image w-full aspect-[1/1.5] rounded-lg object-cover object-top mix-blend-screen brightness-90 grayscale"
            />
          </div>

          {/* Text Content */}
          <div className="col-span-12 md:col-span-8 space-y-10 md:space-y-16">
            {/* Main Text */}
            <p className="about-main-text text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-zinc-300 max-w-[40ch]">
              With a passion for design and development, I take projects from
              ideation to launch, ensuring a seamless journey that leaves a lasting
              positive impact on the digital landscape and your business.
            </p>

            {/* About Me Details */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-20">
              <p className="text-sm md:text-base text-zinc-500 uppercase tracking-wider whitespace-nowrap">
                ( ABOUT ME )
              </p>

              <div className="about-secondary-text text-base md:text-lg text-zinc-400 max-w-[40ch] space-y-4">
                <p>
                  Creating great web experiences is my primary focus. I ensure each
                  project leaves users with a feel-good sensation through meticulous
                  attention to detail and user-centric design principles.
                </p>
                <p>
                  When I'm not immersed in web development and design, you can find me
                  sharing insights about my freelance journey, playing music (Funk), or just relaxing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
