import blogField from "@/assets/blog-field.jpg";
import blogGrain from "@/assets/blog-grain.jpg";
import blogHarvest from "@/assets/blog-harvest.jpg";
import { useInView } from "@/hooks/useInView";

const posts = [
  { image: blogField, title: "This Doctor Is Also a Farmer", date: "08 Feb" },
  { image: blogGrain, title: "Work-Friendly Lunch Recipes", date: "08 Feb" },
  { image: blogHarvest, title: "Healthiest Vegetables on Earth", date: "08 Feb" },
];

const BlogSection = () => {
  const [ref, inView] = useInView();

  return (
    /*
     * Negative top margin pulls the section upward so the white panel
     * overlaps the dark-green Testimonials section above.
     * z-20 keeps it above the testimonials torn-paper edge.
     */
    <section id="news" className="relative -mt-16 md:-mt-24 z-20">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* ── Floating white panel ── */}
        <div className="bg-card shadow-2xl px-6 pt-10 pb-14 md:px-12 md:pt-14 md:pb-20">

          {/* Leaf icon */}
          <div className="mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 4C8 4 4 10 6 16c2 6 8 8 8 8s6-2 8-8c2-6-2-12-8-12z" fill="hsl(var(--primary))" opacity="0.7"/>
              <path d="M14 8v12M10 14c2-2 4-2 4-2s2 0 4 2" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div>
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] mb-3">From the Blog Post</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Latest News & Articles
                <br />
                Directly from Blog
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed self-end">
              Lorem ipsum is simply free text available. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean
              lacinia bibendum nulla sed consectetur.
            </p>
          </div>

          {/* Blog cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.title} className="bg-card rounded-2xl shadow-lg group">
                {/*
                 * 'relative' here (NOT overflow-hidden) so the date badge
                 * can extend below the image without being clipped.
                 */}
                <div className="relative">
                  {/* overflow-hidden only on the image wrapper, not the outer div */}
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={640}
                      height={512}
                    />
                  </div>

                  {/* Badge — outside overflow-hidden, so fully visible */}
                  <span className="absolute bottom-0 right-4 translate-y-1/2 z-10 bg-primary text-primary-foreground text-xs font-bold w-12 h-12 rounded-full flex flex-col items-center justify-center leading-tight text-center pointer-events-none">
                    <span>{post.date.split(' ')[0]}</span>
                    <span>{post.date.split(' ')[1]}</span>
                  </span>
                </div>

                {/* Card body — extra top padding to give the badge room */}
                <div className="p-5 pt-9">
                  <p className="text-muted-foreground text-xs mb-2 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />{"XNT_ADM"}
                  </p>
                  <h3 className="font-bold text-foreground mb-3 text-lg">{post.title}</h3>
                  <a href="#news" className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-5 py-2 rounded hover:opacity-90 transition-opacity">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>


        </div>
        {/* end white panel */}
      </div>
    </section>
  );
};

export default BlogSection;
