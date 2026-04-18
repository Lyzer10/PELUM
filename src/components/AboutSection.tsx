import blogGrain from "@/assets/blog-grain.jpg";
import projectTea from "@/assets/project-tea.jpg";
import { pelumSummary } from "@/content/pelum";
import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="mt-12 overflow-hidden bg-background py-12 md:mt-16 md:py-16">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative mx-auto h-[360px] w-full max-w-[560px] md:h-[500px]">
            <div className="absolute left-[84px] top-0 h-[280px] w-[280px] overflow-hidden rounded-full shadow-[0_28px_80px_rgba(22,52,35,0.16)] md:left-[120px] md:h-[420px] md:w-[420px] z-0">
              <img
                src={projectTea}
                alt="Farmer working in a green field"
                className="h-full w-full object-cover"
                loading="lazy"
                width={640}
                height={640}
              />
            </div>

            <div className="absolute left-0 top-12 h-[170px] w-[170px] overflow-hidden rounded-full shadow-[0_18px_45px_rgba(22,52,35,0.14)] md:left-2 md:top-14 md:h-[210px] md:w-[210px] z-10">
              <img
                src={blogGrain}
                alt="Hands holding seeds"
                className="h-full w-full object-cover"
                loading="lazy"
                width={480}
                height={480}
              />
            </div>

            <div className="pointer-events-none absolute left-1/2 bottom-[-24px] hidden h-14 w-14 -translate-x-1/2 rounded-full bg-mustard shadow-[0_0_30px_rgba(251,191,36,0.35)] animate-float md:block" />
          </div>

          <div className="max-w-[540px]">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/12 text-primary">
              <img
                src="/logo.png"
                alt="PELUM logo"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Welcome to PELUM
            </p>

            <h2 className="mb-5 text-3xl font-bold leading-[1.2] text-foreground md:text-[40px]">
              A summary of
              <br />
              PELUM Tanzania
            </h2>

            <p className="max-w-xl text-[15px] leading-8 text-muted-foreground md:text-base">
              {pelumSummary}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 text-primary">
                  <span className="text-2xl font-bold">12</span>
                </div>
                <div>
                  <p className="text-lg font-bold leading-6 text-foreground">Countries</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 text-primary">
                  <span className="text-2xl font-bold">42</span>
                </div>
                <div>
                  <p className="text-lg font-bold leading-6 text-foreground">Member Organizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
