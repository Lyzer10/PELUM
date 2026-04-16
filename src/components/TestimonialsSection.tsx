import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import { useInView } from "@/hooks/useInView";

const TestimonialsSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className="relative py-20 md:py-28" style={{ backgroundColor: '#1f4e3d' }}>
      {/* Torn edge top — overlaps 2px into section to kill the gap line */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none" style={{ transform: 'translateY(calc(-100% + 2px))' }}>
        <img src="/ripped-paper-base.png" alt="" className="w-full block" />
      </div>

      {/* Vertical "TESTIMONIALS" label on left */}
      <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-10 bg-secondary" />
          <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase" style={{ writingMode: 'vertical-lr' }}>
            Testimonials
          </span>
          <div className="w-px h-10 bg-secondary" />
        </div>
      </div>

      <div ref={ref} className={`container mx-auto px-6 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {["s1", "s2", "s3", "s4", "s5"].map((id) => (
            <Star key={id} size={22} className="fill-secondary text-secondary" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          This is due to their excellent service, competitive pricing and customer support.
          It's throughly refresing to get such a personal touch. Duis aute lorem ipsum is
          simply free text irure dolor in reprehenderit in esse nulla pariatur.
        </p>

        {/* Avatars */}
        <div className="flex justify-center gap-3 mb-6">
          {([
            { src: testimonial1, active: false },
            { src: testimonial2, active: true },
            { src: testimonial3, active: false },
          ]).map(({ src, active }) => (
            <div
              key={src}
              className={`w-16 h-16 rounded-full overflow-hidden border-[3px] ${active ? "border-primary" : "border-primary-foreground/30"}`}
            >
              <img src={src} alt="Customer" className="w-full h-full object-cover" loading="lazy" width={64} height={64} />
            </div>
          ))}
        </div>

        {/* Name */}
        <h4 className="text-primary-foreground font-bold text-base">Caleb Hoffman</h4>
        <p className="text-secondary text-xs font-semibold uppercase tracking-[0.2em] mt-1">Customer</p>
      </div>

      {/* Torn edge — hangs below the green background, same logic as top */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none" style={{ transform: 'translateY(99%)' }}>
        <img src="/ripped-paper-testimonials.png" alt="" className="w-full block" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
