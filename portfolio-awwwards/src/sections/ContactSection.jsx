import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useGSAP(() => {
    // Title animation
    gsap.from(".contact-title", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      },
      opacity: 0,
      y: 100,
      rotateX: -45,
    });

    // Form animation
    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });

    // Input field animations
    gsap.from(".form-field", {
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: -30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    });

    // Contact info animation
    gsap.from(".contact-info-item", {
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Floating orbs
    gsap.to(".contact-orb-1", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: -150,
      x: 100,
      rotation: 180,
      ease: "none",
    });

    gsap.to(".contact-orb-2", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: 100,
      x: -80,
      rotation: -120,
      ease: "none",
    });
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section" style={{ position: 'relative', zIndex: 1 }}>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Title */}
        <div className="overflow-hidden mb-16">
          <h2 className="contact-title general-title text-center text-black">
            LET'S CONNECT
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-3xl font-bold text-black mb-6 uppercase">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <label className="block text-black/80 mb-2 font-bold uppercase text-sm font-paragraph">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-field">
                <label className="block text-black/80 mb-2 font-bold uppercase text-sm font-paragraph">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label className="block text-black/80 mb-2 font-bold uppercase text-sm font-paragraph">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <h3 className="text-3xl font-bold text-black mb-6 uppercase">
              Get in touch
            </h3>
            <p className="text-black/80 text-lg leading-relaxed mb-8 font-paragraph">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="contact-info-item flex items-start gap-4 p-6 bg-black/10 backdrop-blur-sm rounded-2xl border border-black/30">
                <div className="text-3xl font-bold text-black">@</div>
                <div>
                  <h4 className="text-black font-bold mb-1 uppercase">Email</h4>
                  <p className="text-black/70 font-paragraph">hello@designer.com</p>
                </div>
              </div>

              <div className="contact-info-item flex items-start gap-4 p-6 bg-black/10 backdrop-blur-sm rounded-2xl border border-black/30">
                <div className="text-3xl font-bold text-black">+</div>
                <div>
                  <h4 className="text-black font-bold mb-1 uppercase">Phone</h4>
                  <p className="text-black/70 font-paragraph">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-info-item flex items-start gap-4 p-6 bg-black/10 backdrop-blur-sm rounded-2xl border border-black/30">
                <div className="text-3xl font-bold text-black">◉</div>
                <div>
                  <h4 className="text-black font-bold mb-1 uppercase">Location</h4>
                  <p className="text-black/70 font-paragraph">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-info-item pt-8">
              <h4 className="text-black font-bold mb-4 uppercase">Follow me</h4>
              <div className="flex gap-4">
                <a href="#" className="social-btn">
                  <span className="text-black">in</span>
                </a>
                <a href="#" className="social-btn">
                  <span className="text-black">dr</span>
                </a>
                <a href="#" className="social-btn">
                  <span className="text-black">be</span>
                </a>
                <a href="#" className="social-btn">
                  <span className="text-black">ig</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
