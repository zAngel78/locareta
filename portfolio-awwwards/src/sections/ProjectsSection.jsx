import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { projects } from "../constants";
import { useState } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    // Title character animation
    const titleSplit = SplitText.create(".projects-title", {
      type: "chars",
    });

    console.log("ProjectsSection: Title split chars:", titleSplit.chars.length);

    gsap.from(titleSplit.chars, {
      scrollTrigger: {
        trigger: ".projects-title",
        start: "top 80%",
        markers: false,
      },
      y: 100,
      opacity: 0,
      stagger: 0.01,
      ease: "power4.inOut",
      duration: 1,
    });

    // Subtitle fade in
    gsap.from(".projects-subtitle", {
      scrollTrigger: {
        trigger: ".projects-subtitle",
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });

    // Project cards fade in
    const cards = gsap.utils.toArray(".work-card");

    console.log("ProjectsSection: Found cards:", cards.length);

    cards.forEach((card, i) => {
      // Card fade in animation
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          markers: false,
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
      });

      // Number counter per card
      ScrollTrigger.create({
        trigger: card,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          const indexEl = document.getElementById("project-index");
          if (indexEl) {
            gsap.to(indexEl, {
              yPercent: -100,
              duration: 0.3,
              ease: "power4.inOut",
              onComplete: () => {
                setCurrentIndex(i);
                gsap.set(indexEl, { yPercent: 100 });
                gsap.to(indexEl, {
                  yPercent: 0,
                  duration: 0.3,
                  ease: "power1.inOut",
                });
              },
            });
          }
        },
        onEnterBack: () => {
          const indexEl = document.getElementById("project-index");
          if (indexEl) {
            gsap.to(indexEl, {
              yPercent: 100,
              duration: 0.3,
              ease: "power4.inOut",
              onComplete: () => {
                setCurrentIndex(i);
                gsap.set(indexEl, { yPercent: -100 });
                gsap.to(indexEl, {
                  yPercent: 0,
                  duration: 0.3,
                  ease: "power1.inOut",
                });
              },
            });
          }
        },
      });
    });
  }, { dependencies: [], scope: document });

  return (
    <section id="projects" className="projects-section relative px-6 md:px-12 py-20 mb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-12">
          <div className="overflow-hidden">
            <h2 className="projects-title text-6xl md:text-8xl font-extrabold uppercase leading-none text-zinc-200">
              Selected Works /
            </h2>
          </div>
          <p className="text-6xl md:text-8xl text-zinc-700 font-extrabold text-right hidden sm:block">
            ( {projects.length} )
          </p>

          {/* Subtitle */}
          <div className="projects-subtitle grid grid-cols-12 gap-8 mt-12">
            <p className="col-span-12 md:col-span-4 md:col-start-2 text-zinc-500 uppercase text-sm text-center">
              ( <span className="sm:hidden">{projects.length} </span>PROJECTS )
            </p>
            <p className="col-span-12 md:col-span-7 text-zinc-400 text-lg md:text-xl leading-relaxed">
              Featured client projects that have been meticulously crafted with
              passion and purpose over the years.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-12 gap-8 mt-20 relative">
          {/* Sticky Number Counter */}
          <div className="hidden md:flex col-span-5 sticky top-12 h-fit overflow-hidden text-[22vw] leading-[0.8] font-semibold text-zinc-200">
            <span className="relative">0</span>
            <span id="project-index" className="relative will-change-transform">
              {currentIndex + 1}.
            </span>
          </div>

          {/* Projects List */}
          <div className="col-span-12 md:col-span-7 flex flex-col space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className="work-card">
                <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="group block">
                  {/* Project Image */}
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <p className="text-sm text-zinc-500 uppercase mb-2 tracking-wide">
                      {project.category}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <h3 className="text-3xl md:text-4xl font-bold uppercase text-zinc-200 group-hover:text-red-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 text-sm border border-zinc-700 rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="px-4 py-2 text-sm bg-zinc-700 text-zinc-200 rounded-full">
                          {project.year || "2024"}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
