import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { services } from "../constants";

gsap.registerPlugin(SplitText);

const ServicesSection = () => {
  useGSAP(() => {
    // Title character animation
    const titleSplit = SplitText.create(".services-title", {
      type: "chars",
    });

    gsap.from(titleSplit.chars, {
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 60%",
      },
      yPercent: 200,
      stagger: 0.02,
      ease: "power2.out",
      duration: 1,
    });

    // Fade in subtitle text
    gsap.from(".services-subtitle", {
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 50%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <section id="services" className="services-section">
      {/* Title and Subtitle */}
      <div className="container mx-auto px-5 pt-20 pb-10">
        <div className="mb-20">
          <div className="overflow-hidden mb-8">
            <h2 className="services-title text-6xl md:text-8xl font-extrabold text-white uppercase">
              What I do /
            </h2>
          </div>
          
          <div className="grid grid-cols-12 gap-4 services-subtitle">
            <p className="col-span-12 md:col-span-4 md:col-start-4 text-center text-white/60 text-sm uppercase tracking-wider">
              ( SERVICES )
            </p>
            <p className="col-span-12 md:col-span-5 text-white/80 text-lg leading-relaxed">
              User-Friendly interfaces don't happen by chance, they are built with intention. 
              I create intuitive solutions that make your users' journey effortless.
            </p>
          </div>
        </div>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative w-full" style={{ minHeight: '300vh' }}>
        <div className="flex flex-col gap-y-16">
          {services.map((service, index) => {
          const getStyleClass = () => {
            if (index === 0) return 'sticky top-[calc(20vh_+_0em)] mb-[17.25em]';
            if (index === 1) return 'sticky top-[calc(20vh_+_5.75em)] mb-[11.5em]';
            if (index === 2) return 'sticky top-[calc(20vh_+_11.5em)] mb-[5.75em]';
            if (index === 3) return 'sticky top-[calc(20vh_+_17.25em)] mb-[5.75em]';
            if (index === 4) return 'sticky top-[calc(20vh_+_23em)] mb-[5.75em]';
            return 'sticky top-[calc(20vh_+_28.75em)]';
          };
          
          return (
            <div
              key={service.id}
              className={`service-card-stacked bg-black border-t border-white/10 ${getStyleClass()}`}
            >
            <div className="container mx-auto px-5">
              {/* Card Header */}
              <div className="flex items-center justify-between py-6 border-b border-white/10">
                <span className="text-white/60 text-2xl font-semibold">
                  ( 0{index + 1} )
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase">
                  {service.title}
                </h3>
                <div className="w-12 h-12 md:w-16 md:h-16">
                  <svg viewBox="0 0 200 200" className="fill-red/30 animate-spin" style={{ animationDuration: '10s' }}>
                    <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-12 gap-4 py-8">
                <div className="col-span-12 md:col-span-7 md:col-start-5">
                  <p className="text-white/70 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 py-2">
                      <span className="text-white/40 text-sm font-mono">01</span>
                      <p className="text-white font-semibold">Modern Solutions</p>
                    </div>
                    <div className="flex items-center gap-4 py-2 border-y border-white/10">
                      <span className="text-white/40 text-sm font-mono">02</span>
                      <p className="text-white font-semibold">Scalability</p>
                    </div>
                    <div className="flex items-center gap-4 py-2">
                      <span className="text-white/40 text-sm font-mono">03</span>
                      <p className="text-white font-semibold">Best Practices</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
