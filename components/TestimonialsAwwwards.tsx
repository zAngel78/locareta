import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Eleanor Pena',
    role: 'Property Investor, NY',
    rating: 5,
    content: 'The level of professionalism and attention to detail was outstanding. RealHome didn\'t just find us a house; they found us a home that perfectly matched our lifestyle.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 2,
    name: 'Robert Fox',
    role: 'CEO, Tech Startup',
    rating: 5,
    content: 'Exceptional service from start to finish. The team understood our needs and delivered beyond expectations. Highly recommend for luxury real estate.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    role: 'Interior Designer',
    rating: 5,
    content: 'Working with RealHome was a dream. They found us the perfect property in record time. Their market knowledge is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 4,
    name: 'Wade Warren',
    role: 'Real Estate Developer',
    rating: 5,
    content: 'Professional, knowledgeable, and incredibly responsive. RealHome made our property search seamless and enjoyable.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 5,
    name: 'Kristin Watson',
    role: 'Entrepreneur',
    rating: 5,
    content: 'Outstanding experience! The attention to detail and personalized service exceeded all our expectations. Truly the best in the business.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  }
];

export default function TestimonialsAwwwards() {
  useGSAP(() => {
    // Disable animations on mobile for better performance
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const cards = gsap.utils.toArray('.testimonial-card');
    const cardCount = cards.length;
    const scrollDistance = cardCount * 80; // Ajustado para mejor scroll

    // Horizontal title movement
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top bottom',
        end: `+=${scrollDistance}%`,
        scrub: 1,
        markers: false, // Cambia a true para debugging
      },
    });

    tl.to('.first-title', {
      xPercent: 70,
    })
      .to(
        '.second-title',
        {
          xPercent: 25,
        },
        '<'
      )
      .to(
        '.third-title',
        {
          xPercent: -50,
        },
        '<'
      );

    // Pin section and reveal cards from bottom
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top top',
        end: `+=${scrollDistance}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        markers: false, // Cambia a true para debugging
      },
    });

    // Set initial state for all cards
    gsap.set(cards, { yPercent: 150 });

    // Reveal each card one by one
    cards.forEach((card, index) => {
      pinTl.to(
        card,
        {
          yPercent: 20,
          ease: 'power1.inOut',
          duration: 1,
        },
        index * 0.8
      );
    });

    // Add extra space at the end
    pinTl.to({}, { duration: 0.5 });
  }, []);

  return (
    <section className="testimonials-section bg-slate-50 relative overflow-hidden py-12 md:py-0">
      {/* Moving titles in background - hidden on mobile */}
      <div className="hidden md:flex absolute w-full h-screen flex-col items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-slate-900/5 first-title text-[18vw] md:text-[20.5vw] leading-[105%] tracking-[-0.4vw] font-black uppercase">
          What
        </h1>
        <h1 className="text-brand-accent/30 second-title text-[18vw] md:text-[20.5vw] leading-[105%] tracking-[-0.4vw] font-black uppercase">
          Clients
        </h1>
        <h1 className="text-slate-900/5 third-title text-[18vw] md:text-[20.5vw] leading-[105%] tracking-[-0.4vw] font-black uppercase">
          Say
        </h1>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden text-center mb-8 px-4">
        <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">Testimonials</span>
        <h2 className="text-3xl font-bold text-brand-dark mt-2">What Clients Say</h2>
      </div>

      {/* Stacked cards in center - desktop carousel / mobile grid */}
      <div className="relative z-10 md:flex md:items-center md:justify-center md:min-h-screen px-4 md:px-5">
        {/* Mobile: Vertical scroll */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-slate-900 shadow-xl"
            >
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-dark p-6 flex flex-col justify-between min-h-[320px]">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand-accent fill-brand-accent" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-white text-base leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-accent"
                  />
                  <div>
                    <h4 className="text-white font-bold text-base uppercase">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Stacked carousel */}
        <div className="hidden md:flex items-center justify-center gap-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card w-80 md:w-96 flex-none rounded-3xl overflow-hidden border-4 border-slate-900 shadow-2xl ${
                index === 0 ? '' : '-ml-44'
              } ${index % 2 === 0 ? 'rotate-[-8deg]' : 'rotate-[4deg]'}`}
              style={{ zIndex: index }}
            >
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-dark p-8 h-full min-h-[400px] flex flex-col justify-between">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-brand-accent fill-brand-accent" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-white text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-accent"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
