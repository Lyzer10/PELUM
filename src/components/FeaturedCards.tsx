import cardCarrots from "@/assets/card-carrots.jpg";
import cardSunflower from "@/assets/card-sunflower.jpg";
import cardHarvester from "@/assets/card-harvester.jpg";
import { pelumFeatureCards } from "@/content/pelum";

const cards = [
  { image: cardCarrots, ...pelumFeatureCards[0] },
  { image: cardSunflower, ...pelumFeatureCards[1] },
  { image: cardHarvester, ...pelumFeatureCards[2] },
];

const FeaturedCards = () => {
  return (
    <section className="relative overflow-visible pt-8 md:pt-10">
      <div
        className="absolute inset-x-0 top-0 h-[150px] md:h-[170px]"
        style={{ backgroundColor: "#efb443" }}
      />
      <div
        className="absolute left-0 top-0 z-10 w-full pointer-events-none"
        style={{ transform: "translateY(calc(-100% + 2px))" }}
      >
        <img
          src="/ripped-paper-primary-up.png"
          alt=""
          className="block w-full"
          style={{ transform: "scaleY(-1)" }}
        />
      </div>
      <div className="relative container mx-auto px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <div key={card.label} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={card.image}
                alt={card.alt}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={512}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
              <p className="absolute bottom-4 left-0 right-0 text-center text-sm font-semibold tracking-wide text-primary-foreground">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
