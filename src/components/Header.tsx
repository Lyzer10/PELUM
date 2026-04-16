import { useState } from "react";
import { Search, ShoppingCart, Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Home", "About", "Pages", "Shop", "Projects", "News"];

  return (
    /* Single sticky wrapper — info bar + nav + torn paper all stay fixed together */
    <div className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-forest hidden md:block">
        <div className="container mx-auto flex items-center justify-between px-6 py-2 text-sm text-primary-foreground/80">
          <div className="flex items-center gap-4">
            <span>Welcome to Agriculture Farm</span>
          </div>
          <div className="flex items-center gap-6">
            <span>needhelp@company.com</span>
            <span>Mon - Sat 8:00 - 6:30, Sunday - CLOSED</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-card shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Agrikon" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-foreground/80 hover:text-secondary font-medium transition-colors duration-200 text-[15px]"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <button className="text-foreground/70 hover:text-secondary transition-colors hidden md:block" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="text-foreground/70 hover:text-secondary transition-colors hidden md:block relative" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            <a
              href="tel:+92888888000"
              className="hidden md:flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Phone size={16} />
              <span>92 888 888 0000</span>
            </a>
            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="lg:hidden bg-card border-t border-border px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-foreground/80 hover:text-secondary font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Torn paper — fixed below the nav, scrolls with it, 2px overlap kills the gap */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ transform: 'translateY(calc(100% - 2px))', zIndex: 49 }}
      >
        <img src="/ripped-paper-header-1.png" alt="" className="w-full block" />
      </div>
    </div>
  );
};

export default Header;
