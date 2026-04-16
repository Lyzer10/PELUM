import { ArrowRight } from "lucide-react";
import projectTea from "@/assets/project-tea.jpg";
import projectHarvest from "@/assets/project-harvest.jpg";
import projectPlanting from "@/assets/project-planting.jpg";
import cardSunflower from "@/assets/card-sunflower.jpg";
import { useInView } from "@/hooks/useInView";

const projects = [
  { image: projectTea, alt: "Tea plantation worker", title: "Leverage Agile" },
  { image: projectHarvest, alt: "Harvest hay bales", title: "Organic Farming" },
  { image: projectPlanting, alt: "Countryside grazing", title: "Eco Solutions" },
  { image: cardSunflower, alt: "Sunflower closeup", title: "Fresh Produce" },
];

const ProjectsSection = () => {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="bg-background py-20 md:py-28">
      <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="text-center mb-14 px-6">
          <div className="flex justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 4C8 4 4 10 6 16c2 6 8 8 8 8s6-2 8-8c2-6-2-12-8-12z" fill="hsl(var(--primary))" opacity="0.7"/>
              <path d="M14 8v12M10 14c2-2 4-2 4-2s2 0 4 2" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] mb-3">Closed Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest Projects List</h2>
        </div>

        {/* Full-width image row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-0">
          {projects.map((proj) => (
            <div key={proj.alt} className="group relative overflow-hidden cursor-pointer">
              <img
                src={proj.image}
                alt={proj.alt}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={640}
                height={512}
              />
              {/* Hover overlay */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <div className="bg-secondary/90 px-5 py-4 flex items-center justify-between">
                  <span className="text-secondary-foreground font-semibold text-base">{proj.title}</span>
                  <div className="w-10 h-10 rounded-full border-2 border-secondary-foreground/40 flex items-center justify-center">
                    <ArrowRight size={16} className="text-secondary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-primary" />
          <span className="w-3 h-3 rounded-full bg-primary" />
          <span className="w-3 h-3 rounded-full bg-border" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
