import serviceAgriculture from "@/assets/service-agriculture.jpg";
import serviceOrganic from "@/assets/service-organic.jpg";
import serviceVegetables from "@/assets/service-vegetables.jpg";
import serviceDairy from "@/assets/service-dairy.jpg";
import { useInView } from "@/hooks/useInView";

const services = [
  { image: serviceAgriculture, title: "Agriculture Products", icon: "🌿" },
  { image: serviceOrganic, title: "Organic Products", icon: "🤲" },
  { image: serviceVegetables, title: "Fresh Vegetables", icon: "🚜" },
  { image: serviceDairy, title: "Dairy Products", icon: "🎁" },
];

const ServicesSection = () => {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="bg-muted py-20 md:py-28">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-14">
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] mb-3">Welcome to Agrikon</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We're Offering</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="bg-card hover:bg-primary rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group relative">
              {/* Image — has its own overflow-hidden so the icon isn't clipped */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={512}
                />
              </div>
              {/* Icon sits on the image/content boundary, fully visible */}
              <div className="absolute top-[10.25rem] left-1/2 -translate-x-1/2 w-14 h-14 bg-primary group-hover:bg-white rounded-full flex items-center justify-center text-2xl border-4 border-card group-hover:border-white shadow-md z-10 transition-all duration-500">
                {svc.icon}
              </div>
              <div className="pt-10 pb-6 px-4 xl:pb-[45px] xl:pl-[50px] xl:pr-[50px] text-center">
                <h3 className="font-bold text-foreground group-hover:text-white mb-2 transition-colors duration-500">{svc.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-500">
                  Lorem ium dolor sit ametad pisicing elit sed simply do ut.
                </p>
              </div>
              {/* Bottom accent bar on hover */}
              <div className="h-1 bg-primary/0 group-hover:bg-white/30 rounded-b-lg transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
