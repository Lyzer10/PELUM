import cardCarrots from "@/assets/card-carrots.jpg";
import cardSunflower from "@/assets/card-sunflower.jpg";
import cardHarvester from "@/assets/card-harvester.jpg";

const cards = [
  { image: cardCarrots, label: "Organic Products", alt: "Fresh organic carrots" },
  { image: cardSunflower, label: "Quality Guarantee", alt: "Bright sunflower" },
  { image: cardHarvester, label: "Modern Farming", alt: "Harvester in field" },
];

const FeaturedCards = () => {
  return (
    <section className="relative pt-16 pb-0 h-[11rem] overflow-visible" style={{ backgroundColor: '#efb443' }}>
      {/* Torn edge top — hangs 2px into section to kill the gap line */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none" style={{ transform: 'translateY(calc(-100% + 2px))' }}>
        <img src="/ripped-paper-primary-up.png" alt="" className="w-full block" style={{ transform: 'scaleY(-1)' }} />
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto -mt-8">
          {cards.map((card) => (
            <div key={card.label} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={512}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
              <p className="absolute bottom-4 left-0 right-0 text-center text-primary-foreground font-semibold text-sm tracking-wide">
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
