import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { testimonials } from "../constants";

const TestimonialsSection = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".testimonial-card");
    const cardCount = cards.length;
    const scrollDistance = cardCount * 60; // 5 cards * 60 = 300% (más rápido)

    // Horizontal title movement (like original)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: `+=${scrollDistance}%`,
        scrub: 1,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .second-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    // Pin section and reveal cards from bottom (like original)
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top top",
        end: `+=${scrollDistance}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
      },
    });

    // Reveal each card one by one through the entire scroll
    cards.forEach((card, index) => {
      pinTl.fromTo(card, {
        yPercent: 150,
      }, {
        yPercent: 20,
        ease: "power1.inOut",
        duration: 1,
      }, index * 0.7);
    });
    
    // Add extra space at the end to ensure last card is fully visible
    pinTl.to({}, { duration: 0.5 });
  });

  return (
    <section id="testimonials" className="testimonials-section bg-main-bg relative mb-[-50vh]">
      <div className="sticky top-0 min-h-screen">
      {/* Moving titles in background */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-gray-800/10 first-title text-[18vw] md:text-[20.5vw] leading-[105%] tracking-[-.4vw] font-bold uppercase">
          What
        </h1>
        <h1 className="text-red-600/30 second-title text-[18vw] md:text-[20.5vw] leading-[105%] tracking-[-.4vw] font-bold uppercase">
          People
        </h1>
        <h1 className="text-gray-800/10 third-title text-[18vw] md:text-[20.5vw] leading-[105%] tracking-[-.4vw] font-bold uppercase">
          Say
        </h1>
      </div>

      {/* Stacked cards in center */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-5">
        <div className="flex items-center justify-center gap-0">
        {testimonials.slice(0, 5).map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card w-80 md:w-96 flex-none rounded-[2vw] overflow-hidden border-[.4vw] border-gray-900 shadow-2xl ${
              index === 0 ? "" : "-ml-44"
            } ${
              index % 2 === 0 ? "rotate-[-8deg]" : "rotate-[4deg]"
            }`}
            style={{ zIndex: index }}
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 p-8 h-full min-h-[400px]">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-red-400">★</span>
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-white text-lg leading-relaxed mb-8 italic font-paragraph">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-red-600 flex-center text-2xl font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg uppercase">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/70 text-sm font-paragraph">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
};

export default TestimonialsSection;
