import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import blogField from "@/assets/blog-field.jpg";
import blogGrain from "@/assets/blog-grain.jpg";
import blogHarvest from "@/assets/blog-harvest.jpg";
import { useInView } from "@/hooks/useInView";

const BLOG_CARD_WIDTH = 400;
const BLOG_CARD_HEIGHT = 471;
const BLOG_IMAGE_WIDTH = 370;
const BLOG_IMAGE_HEIGHT = 208;
const BLOG_CONTENT_WIDTH = 370;
const BLOG_CONTENT_HEIGHT = 233;
const BLOG_DATE_SIZE = 74;
const DESKTOP_SIDE_OFFSET = 244;
const DESKTOP_MIN_WIDTH = 1748;

const posts = [
  {
    image: blogField,
    title: "This Doctor Is Also a Farmer",
    date: "08 Feb",
    author: "XNT_ADM",
  },
  {
    image: blogGrain,
    title: "Work-Friendly Lunch Recipes",
    date: "08 Feb",
    author: "XNT_ADM",
  },
  {
    image: blogHarvest,
    title: "Healthiest Vegetables on Earth",
    date: "08 Feb",
    author: "XNT_ADM",
  },
];

const getWideDesktop = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= DESKTOP_MIN_WIDTH;
};

const BlogSection = () => {
  const [ref, inView] = useInView();
  const [wideDesktop, setWideDesktop] = useState(getWideDesktop);

  useEffect(() => {
    const handleResize = () => setWideDesktop(getWideDesktop());

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="news" className="relative z-20 -mt-16 md:-mt-24">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div
          className="bg-card px-6 pb-14 pt-10 shadow-2xl md:px-10 md:pb-20 md:pt-14"
          style={
            wideDesktop
              ? {
                  paddingLeft: `${DESKTOP_SIDE_OFFSET}px`,
                  paddingRight: `${DESKTOP_SIDE_OFFSET}px`,
                }
              : undefined
          }
        >
          <div className="mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 4C8 4 4 10 6 16c2 6 8 8 8 8s6-2 8-8c2-6-2-12-8-12z"
                fill="hsl(var(--primary))"
                opacity="0.7"
              />
              <path
                d="M14 8v12M10 14c2-2 4-2 4-2s2 0 4 2"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                From the Blog Post
              </p>
              <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Latest News & Articles
                <br />
                Directly from Blog
              </h2>
            </div>

            <p className="self-end leading-relaxed text-muted-foreground">
              Lorem ipsum is simply free text available. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean
              lacinia bibendum nulla sed consectetur.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-[30px]">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group relative flex-none bg-card"
                style={{
                  width: `min(100%, ${BLOG_CARD_WIDTH}px)`,
                  maxWidth: `${BLOG_CARD_WIDTH}px`,
                  height: `${BLOG_CARD_HEIGHT}px`,
                }}
              >
                <div
                  className="absolute left-[15px] top-[15px]"
                  style={{
                    width: `${BLOG_IMAGE_WIDTH}px`,
                    height: `${BLOG_IMAGE_HEIGHT}px`,
                  }}
                >
                  <div className="h-full w-full overflow-hidden rounded-[0.45rem]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={BLOG_IMAGE_WIDTH}
                      height={BLOG_IMAGE_HEIGHT}
                    />
                  </div>
                </div>

                <span
                  className="pointer-events-none absolute z-10 flex items-center justify-center rounded-full border-4 border-card bg-[#57b25f] text-center text-sm font-bold leading-tight text-white"
                  style={{
                    width: `${BLOG_DATE_SIZE}px`,
                    height: `${BLOG_DATE_SIZE}px`,
                    top: "186px",
                    right: "18px",
                  }}
                >
                  <span>
                    {post.date.split(" ")[0]}
                    <br />
                    {post.date.split(" ")[1]}
                  </span>
                </span>

                <div
                  className="absolute left-[15px] text-left"
                  style={{
                    top: "223px",
                    width: `${BLOG_CONTENT_WIDTH}px`,
                    height: `${BLOG_CONTENT_HEIGHT}px`,
                    padding: "40px",
                  }}
                >
                  <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.03em] text-muted-foreground">
                    <FaRegUserCircle size={14} className="text-primary" />
                    {post.author}
                  </p>

                  <h3 className="mb-7 text-[22px] font-bold leading-[1.35] text-foreground">
                    {post.title}
                  </h3>

                  <a
                    href="#news"
                    className="inline-flex h-10 min-w-[132px] items-center justify-center rounded-[0.35rem] bg-secondary px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
