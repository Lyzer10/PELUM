import { ChevronUp, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      el.classList.add("animate-fade-up");
      el.style.animationDelay = "0.2s";
    }
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[85vh] overflow-hidden -mt-[2px]">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Lush green terraced rice fields"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-forest/65" />


      {/* Subtle vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[20, 40, 60, 80].map((pos) => (
          <div
            key={pos}
            className="absolute top-0 bottom-0 w-px bg-primary-foreground/5"
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-[90vh] md:min-h-[85vh]">
        <div ref={contentRef} className="max-w-2xl opacity-0">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Welcome to Agriculture Farm
          </p>
          <h1 className="font-handwritten text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.1] mb-6">
            Agriculture
            <br />
            & Eco Farming
            <svg className="inline-block ml-2 -mt-4" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L16 10L24 8L18 14L24 20L16 18L14 26L12 18L4 20L10 14L4 8L12 10Z" fill="hsl(var(--secondary))" />
            </svg>
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-md mb-8 leading-relaxed">
            There are many passages of lorem ipsum, but the majority have
            suffered alteration in some form.
          </p>
          <a
            href="#about"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3.5 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity border border-secondary"
          >
            Discover More
          </a>
        </div>

        {/* Side navigation arrows */}
        <div className="hidden md:flex flex-col gap-4 absolute right-10 top-1/2 -translate-y-1/2">
          <button className="w-12 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center text-primary-foreground/50 hover:border-primary-foreground/60 hover:text-primary-foreground/80 transition-colors" aria-label="Previous">
            <ChevronUp size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center text-primary-foreground/50 hover:border-primary-foreground/60 hover:text-primary-foreground/80 transition-colors" aria-label="Next">
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
