import { useEffect, useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import projectTea from "@/assets/project-tea.jpg";
import projectHarvest from "@/assets/project-harvest.jpg";
import projectPlanting from "@/assets/project-planting.jpg";
import cardSunflower from "@/assets/card-sunflower.jpg";
import { useInView } from "@/hooks/useInView";

const PROJECT_HEIGHT = 450;
const PROJECT_WIDTH = 585;
const PROJECT_GAP = 24;
const DETAIL_CARD_WIDTH = 336;
const PROJECT_PEEK_WIDTH = Math.round(PROJECT_WIDTH / 2);

const projects = [
  {
    image: projectTea,
    alt: "Tea plantation support activity",
    title: "Support for Ecological Agriculture",
  },
  {
    image: projectHarvest,
    alt: "Harvest and machinery in the field",
    title: "Support for Agricultural Development",
  },
  {
    image: projectPlanting,
    alt: "Farmer planting in the field",
    title: "Climate Resilient Farming",
  },
  {
    image: cardSunflower,
    alt: "Sunflower close-up",
    title: "Community Livelihood Initiatives",
  },
];

const getProjectLayout = () => {
  if (typeof window === "undefined") {
    return { visibleCount: 2, slideWidth: PROJECT_WIDTH, peekWidth: PROJECT_PEEK_WIDTH };
  }

  if (window.innerWidth >= 1280) {
    const availableWidth = window.innerWidth - 48;
    const peekWidth = Math.max(
      0,
      Math.min(
        PROJECT_PEEK_WIDTH,
        availableWidth - (PROJECT_WIDTH * 2 + PROJECT_GAP * 2),
      ),
    );

    return { visibleCount: 2, slideWidth: PROJECT_WIDTH, peekWidth };
  }

  return {
    visibleCount: 1,
    slideWidth: Math.min(window.innerWidth - 48, PROJECT_WIDTH),
    peekWidth: 0,
  };
};

const ProjectsSection = () => {
  const [ref, inView] = useInView();
  const [layout, setLayout] = useState(getProjectLayout);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => setLayout(getProjectLayout());

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, projects.length - layout.visibleCount),
    [layout.visibleCount],
  );

  const displayProjects = useMemo(
    () => (layout.peekWidth > 0 ? [...projects, projects[0]] : projects),
    [layout.peekWidth],
  );

  useEffect(() => {
    setCurrentSlide((value) => Math.min(value, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (maxIndex === 0) return;

    const interval = window.setInterval(() => {
      setCurrentSlide((value) => (value >= maxIndex ? 0 : value + 1));
    }, 5200);

    return () => window.clearInterval(interval);
  }, [maxIndex]);

  const viewportWidth =
    layout.visibleCount * layout.slideWidth +
    Math.max(0, layout.visibleCount - 1) * PROJECT_GAP +
    (layout.peekWidth > 0 ? PROJECT_GAP + layout.peekWidth : 0);

  return (
    <section id="projects" className="bg-background pb-20 pt-8 md:pb-28 md:pt-10">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-10 px-6 text-center md:mb-12">
          <div className="mb-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-primary">
              <img
                src="/logo.png"
                alt="PELUM logo"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Closed Projects
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Latest Projects List
          </h2>
        </div>

        <div className="overflow-hidden px-6">
          <div className="mx-auto overflow-hidden" style={{ width: `${viewportWidth}px`, maxWidth: "100%" }}>
            <div
              className="flex transition-transform ease-in-out"
              style={{
                gap: `${PROJECT_GAP}px`,
                transform: `translateX(-${currentSlide * (layout.slideWidth + PROJECT_GAP)}px)`,
                transitionDuration: "1400ms",
              }}
            >
              {displayProjects.map((project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className="group relative flex-none overflow-hidden rounded-[0.6rem]"
                  style={{
                    width: `${layout.slideWidth}px`,
                    height: `${PROJECT_HEIGHT}px`,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={585}
                    height={450}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-forest/10 via-transparent to-transparent transition-colors duration-300 group-hover:from-forest/25" />

                  <div className="absolute bottom-7 left-7 translate-y-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div
                      className="flex items-center justify-between gap-6 bg-secondary px-8 py-8 text-secondary-foreground"
                      style={{
                        width: `${Math.min(DETAIL_CARD_WIDTH, layout.slideWidth - 56)}px`,
                        minHeight: "150px",
                        maxWidth: "calc(100vw - 80px)",
                      }}
                    >
                      <h3 className="max-w-[195px] text-[22px] font-bold leading-[1.15]">
                        {project.title}
                      </h3>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-secondary-foreground bg-transparent">
                        <FaArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to project group ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-primary" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
