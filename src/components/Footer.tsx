import { FaGlobe, FaLeaf, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { pelumSummary, pelumValues } from "@/content/pelum";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "News", href: "/#news" },
];

const Footer = () => {
  return (
    <footer
      className="relative pb-8 pt-20 text-primary-foreground"
      style={{ backgroundColor: "hsl(158.3, 43.1%, 21.4%)" }}
    >
      <div className="absolute left-0 top-0 z-10 w-full pointer-events-none" style={{ transform: "translateY(calc(-100% + 2px))" }}>
        <img src="/ripped-paper-base-2.png" alt="" className="block w-full" />
      </div>
      <div className="container mx-auto px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src="/logo.png" alt="PELUM Tanzania" className="h-14 w-auto object-contain" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-secondary">PELUM</p>
                <p className="text-sm text-primary-foreground/70">Tanzania</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/60">{pelumSummary}</p>
            <div className="flex flex-wrap gap-2">
              {pelumValues.map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">Explore</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="transition-colors hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">Key Facts</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <FaUsers size={15} className="mt-1 flex-shrink-0 text-secondary" />
                <span>42 member organizations working across Tanzania.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaLeaf size={15} className="mt-1 flex-shrink-0 text-secondary" />
                <span>Ecological agriculture for improved smallholder farmers' livelihoods.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaGlobe size={15} className="mt-1 flex-shrink-0 text-secondary" />
                <span>Part of a regional network spanning 12 African countries.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">Locations</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={15} className="mt-1 flex-shrink-0 text-secondary" />
                <span>Morogoro Municipality, Tanzania</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={15} className="mt-1 flex-shrink-0 text-secondary" />
                <span>Lusaka, Zambia</span>
              </li>
              <li className="text-primary-foreground/60">
                National coordination in Tanzania with regional association headquarters in Zambia.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/50 md:flex-row">
          <p>&copy; Copyright by PELUM Tanzania</p>
          <div className="flex gap-6">
            <Link to="/#about" className="transition-colors hover:text-secondary">About Us</Link>
            <Link to="/#services" className="transition-colors hover:text-secondary">Services</Link>
            <Link to="/#news" className="transition-colors hover:text-secondary">News</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
