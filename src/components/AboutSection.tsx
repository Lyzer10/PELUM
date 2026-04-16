import aboutWindmill from "@/assets/about-windmill.jpg";
import aboutHaybale from "@/assets/about-haybale.jpg";
import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="bg-background py-20 md:py-28 overflow-hidden">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative flex flex-col lg:flex-row items-center">

          {/* ── Left: images block (60% wide) ── */}
          <div className="relative w-full lg:w-[58%] shrink-0 z-0 self-stretch">
            {/* Main windmill image — fills the column */}
            <img
              src={aboutWindmill}
              alt="Windmill at sunset"
              className="w-full h-full object-cover shadow-xl"
              style={{ minHeight: '480px', maxHeight: '600px' }}
              loading="lazy"
              width={640}
              height={768}
            />

            {/* Haybale — no border, sits over the windmill image bottom-left */}
            <img
              src={aboutHaybale}
              alt="Hay bale in countryside"
              className="absolute bottom-6 left-6 w-48 md:w-64 object-cover shadow-lg"
              style={{ aspectRatio: '4/3' }}
              loading="lazy"
              width={640}
              height={480}
            />

            {/* Trust badge */}
            <div className="absolute top-10 -left-4 z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-mustard shadow-lg md:-left-6 md:h-32 md:w-32">
              <span className="text-card text-[10px] font-bold uppercase tracking-widest">Trusted By</span>
              <span className="text-card text-3xl font-bold leading-none">8900</span>
            </div>
          </div>

          {/* ── Right: white content card — overlaps image by ~18% ── */}
          <div className="relative z-10 w-full lg:w-[56%] lg:-ml-[14%] mt-12 lg:mt-0">
            <div className="bg-card p-8 shadow-[0_30px_80px_rgba(22,52,35,0.16)] md:p-12 xl:px-14 xl:py-14">

              <div className="mb-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4C8 4 4 10 6 16c2 6 8 8 8 8s6-2 8-8c2-6-2-12-8-12z" fill="hsl(var(--primary))" opacity="0.7"/>
                  <path d="M14 8v12M10 14c2-2 4-2 4-2s2 0 4 2" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              <p className="text-secondary text-xs font-semibold uppercase tracking-[0.25em] mb-4">Welcome to Agrikon</p>

              <h2 className="text-3xl md:text-[40px] font-bold text-foreground leading-[1.2] mb-5">
                Better Agriculture<br />
                for Better Future
              </h2>

              <p className="text-secondary font-handwritten text-xl md:text-[22px] mb-5 leading-relaxed">
                We have 30 years of agriculture & eco farming<br className="hidden md:block" />
                experience globaly, work with <span className="underline underline-offset-4">professionals</span>
              </p>

              <p className="text-muted-foreground leading-relaxed mb-10 text-[15px]">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humor or random word that donor send minimum take
                minute some lorem ipsum text which don't look even.
              </p>

              {/* Feature badges */}
              <div className="mb-10 grid gap-6 border-y border-muted/70 py-6 md:grid-cols-2 md:gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center text-primary">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>
                    </svg>
                  </div>
                  <span className="font-bold text-foreground text-sm leading-tight">Professional<br/>Farmers</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center text-primary">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L4 7v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <span className="font-bold text-foreground text-sm leading-tight">Organic & Eco<br/>Solutions</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#services" className="inline-block bg-secondary px-8 py-3.5 text-center text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90">
                  Discover More
                </a>
                <a href="#contact" className="inline-block bg-primary px-8 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                  Send a Message
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
