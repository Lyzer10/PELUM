import { useEffect, useMemo, useState } from "react";
import {
  FaBalanceScale,
  FaHandsHelping,
  FaLeaf,
  FaSeedling,
  FaShoppingBasket,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { pelumPrograms } from "@/content/programs";
import { useInView } from "@/hooks/useInView";

const CARD_WIDTH = 300;
const CARD_HEIGHT = 508;
const CARD_IMAGE_WIDTH = 280;
const CARD_IMAGE_HEIGHT = 221;
const CARD_CONTENT_WIDTH = 280;
const CARD_CONTENT_HEIGHT = 267;
const CARD_ICON_SIZE = 100;
const CARD_GAP = 10;
const DESKTOP_SIDE_OFFSET = 244;

const programIcons: Record<string, IconType> = {
  "seed-right": FaSeedling,
  "land-rights": FaBalanceScale,
  "women-empowerment": FaUsers,
  eoa: FaLeaf,
  "access-to-markets": FaShoppingBasket,
  "small-projects": FaHandsHelping,
};

const programSummaries: Record<string, string> = {
  "seed-right":
    "Protecting farmer-owned seed systems, seed sovereignty, and quality local seed access.",
  "land-rights":
    "Building awareness, participation, and accountability in village land governance.",
  "women-empowerment":
    "Strengthening rural women's leadership, rights, and climate resilience.",
  eoa: "Supporting ecological organic agriculture communication, learning, and uptake.",
  "access-to-markets":
    "Improving market linkages, advocacy, and fair agro-market access.",
  "small-projects":
    "Backing local agro-ecological initiatives through grants and capacity support.",
};

const getVisibleCount = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1280) return 4;
  if (window.innerWidth >= 900) return 2;
  return 1;
};

const getDesktopFramed = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 1718;
};

const ServicesSection = () => {
  const [ref, inView] = useInView();
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [desktopFramed, setDesktopFramed] = useState(getDesktopFramed);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setDesktopFramed(getDesktopFramed());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, pelumPrograms.length - visibleCount),
    [visibleCount],
  );

  useEffect(() => {
    setCurrentSlide((value) => Math.min(value, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (maxIndex === 0) return;

    const interval = window.setInterval(() => {
      setCurrentSlide((value) => (value >= maxIndex ? 0 : value + 1));
    }, 5500);

    return () => window.clearInterval(interval);
  }, [maxIndex]);

  const viewportWidth =
    visibleCount * CARD_WIDTH + Math.max(0, visibleCount - 1) * CARD_GAP;

  return (
    <section id="services" className="relative bg-background pb-8 pt-8 md:pb-10 md:pt-10">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto mb-10 max-w-3xl px-6 text-center md:mb-12">
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Welcome to PELUM
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Our Programs
          </h2>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <div
            className="overflow-hidden"
            style={
              desktopFramed
                ? {
                    width: `${viewportWidth}px`,
                    marginLeft: `${DESKTOP_SIDE_OFFSET}px`,
                    marginRight: `${DESKTOP_SIDE_OFFSET}px`,
                  }
                : {
                    width: `${viewportWidth}px`,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }
            }
          >
            <div
              className="flex transition-transform ease-in-out"
              style={{
                gap: `${CARD_GAP}px`,
                transform: `translateX(-${currentSlide * (CARD_WIDTH + CARD_GAP)}px)`,
                transitionDuration: "1400ms",
              }}
            >
              {pelumPrograms.map((program) => {
                const Icon = programIcons[program.id] ?? FaLeaf;
                const summary = programSummaries[program.id] ?? program.cardDescription;

                return (
                  <div
                    key={program.id}
                    className="group block flex-none"
                    style={{ width: `${CARD_WIDTH}px` }}
                  >
                    <article
                      className="relative"
                      style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
                    >
                      <div
                        className="absolute left-[10px] top-[10px] overflow-hidden"
                        style={{
                          width: `${CARD_IMAGE_WIDTH}px`,
                          height: `${CARD_IMAGE_HEIGHT}px`,
                        }}
                      >
                        <img
                          src={program.image}
                          alt={program.imageAlt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div
                        className="absolute left-[10px] bg-background text-center"
                        style={{
                          top: "231px",
                          width: `${CARD_CONTENT_WIDTH}px`,
                          height: `${CARD_CONTENT_HEIGHT}px`,
                          paddingLeft: "50px",
                          paddingRight: "50px",
                          paddingTop: "78px",
                          paddingBottom: "45px",
                        }}
                      >
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div
                          className="absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-background bg-[#57b25f] text-white transition-colors duration-300 group-hover:bg-secondary"
                          style={{
                            top: "0",
                            width: `${CARD_ICON_SIZE}px`,
                            height: `${CARD_ICON_SIZE}px`,
                          }}
                        >
                          <Icon size={30} />
                        </div>

                        <h3 className="text-[18px] font-bold leading-[1.25] text-foreground">
                          {program.navLabel}
                        </h3>

                        <p className="mt-4 text-[15px] leading-[2] text-muted-foreground">
                          {summary}
                        </p>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to program group ${index + 1}`}
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

export default ServicesSection;
