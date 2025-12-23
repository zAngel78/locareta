import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VideoShowcaseSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-showcase-section",
        start: "top top",
        end: "+=200%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Expand circle from small to full screen
    tl.to(".video-box", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut",
    });

    // Fade out play button
    tl.to(".play-button-wrapper", {
      opacity: 0,
      scale: 0.5,
      ease: "power2.in",
    }, "-=0.5");

    // Rotate circle text continuously
    gsap.to(".circle-text", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <section className="video-showcase-section">
      <div
        style={{
          clipPath: "circle(8% at 50% 50%)",
        }}
        className="video-box"
      >
        {/* YouTube Video - UI/UX Design Showreel */}
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="w-full h-full object-cover"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ border: 'none', pointerEvents: 'none' }}
        />

        {/* Play button with rotating text */}
        <div className="play-button-wrapper">
          <div className="relative">
            {/* Rotating "WATCH SHOWREEL" text */}
            <svg className="circle-text" width="200" height="200" viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text fill="#dc2626" fontSize="14" fontWeight="bold" letterSpacing="3">
                <textPath href="#circlePath" startOffset="0%">
                  WATCH SHOWREEL • WATCH SHOWREEL • 
                </textPath>
              </text>
            </svg>

            {/* Play icon */}
            <div className="play-btn">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M15 10L30 20L15 30V10Z" fill="#dc2626" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
