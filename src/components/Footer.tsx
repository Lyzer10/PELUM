import { Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-primary-foreground pt-20 pb-8" style={{ backgroundColor: '#1f4e3d' }}>
      {/* Torn edge — hangs above the footer, 2px overlap to kill the gap line */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none" style={{ transform: 'translateY(calc(-100% + 2px))' }}>
        <img src="/ripped-paper-base.png" alt="" className="w-full block" />
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Agrikon" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              There are many variations of passages of lorem ipsum available, but the majority suffered.
            </p>
            <div className="flex items-center gap-1 bg-primary-foreground/10 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent px-4 py-2.5 text-sm outline-none flex-1 placeholder:text-primary-foreground/40"
              />
              <button className="px-3 py-2.5 text-secondary" aria-label="Subscribe">→</button>
            </div>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Links</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              {["Our Projects", "About us", "Our Services", "Upcoming Events", "Volunteers"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                    <span className="text-secondary">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* News */}
          <div>
            <h4 className="font-bold mb-5 text-lg">News</h4>
            <div className="space-y-4">
              {[
                { date: "Feb 8, 2020", title: "Healthiest Beans and Legumes" },
                { date: "Feb 9, 2020", title: "Friendly Breakfast Ideas" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <div className="w-16 h-14 bg-primary-foreground/10 rounded-lg flex-shrink-0" />
                  <div>
                    <p className="text-secondary text-xs font-semibold">{item.date}</p>
                    <p className="text-primary-foreground/80 text-sm font-medium leading-snug">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Contact</h4>
            <ul className="space-y-4 text-primary-foreground/70 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                555 342 0032
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                668 888 0000
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                needhelp@company.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                <span>80 broklyn golden street line<br/>New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/50 text-sm">
          <p>&copy; Copyright by Agrikon.com</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
