import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
    <section className="relative -mt-[2px] min-h-[90vh] w-full overflow-hidden md:min-h-[85vh]">
      <img
        src={heroBg}
        alt="Lush green terraced rice fields"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-forest/65" />

      <div className="pointer-events-none absolute inset-0">
        {[20, 40, 60, 80].map((pos) => (
          <div
            key={pos}
            className="absolute bottom-0 top-0 w-px bg-primary-foreground/5"
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto flex min-h-[90vh] items-center px-6 md:min-h-[85vh]">
        <div ref={contentRef} className="relative max-w-3xl opacity-0">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Welcome to PELUM Tanzania
          </p>
          <h1 className="mb-6 font-handwritten text-5xl leading-[1.1] text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Ecological
            <br />
            Agriculture
            <svg className="ml-2 inline-block -mt-4" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L16 10L24 8L18 14L24 20L16 18L14 26L12 18L4 20L10 14L4 8L12 10Z" fill="hsl(var(--secondary))" />
            </svg>
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            PELUM Tanzania strengthens member organizations in ecological agriculture so
            smallholder farmers can improve livelihoods through networking, learning,
            documentation, communication, and advocacy.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/#about"
              className="inline-block border border-secondary bg-secondary px-8 py-3.5 text-center text-sm font-semibold tracking-wide text-secondary-foreground transition-opacity hover:opacity-90"
            >
              About PELUM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
