import { useState } from "react";
import { FaArrowRight, FaBars, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "News", href: "/#news" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();

  return (
    <div className="sticky top-0 z-50">
      <div className="hidden bg-forest md:block">
        <div className="container mx-auto flex items-center justify-between px-6 py-2 text-sm text-primary-foreground/80">
          <span className="font-semibold uppercase tracking-[0.22em] text-secondary">
            Welcome to PELUM Tanzania
          </span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt size={13} />
              Morogoro Municipality, Tanzania
            </span>
            <span>Regional coordination in Lusaka, Zambia</span>
          </div>
        </div>
      </div>

      <header className="bg-card shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="PELUM Tanzania" className="h-12 w-auto object-contain" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-primary">PELUM</p>
              <p className="text-xs text-muted-foreground">Tanzania</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                (link.href === "/" && pathname === "/") ||
                (link.href === "/#about" && pathname === "/" && hash === "#about") ||
                (link.href === "/#services" && pathname === "/" && hash === "#services") ||
                (link.href === "/#projects" && pathname === "/" && hash === "#projects") ||
                (link.href === "/#news" && pathname === "/" && hash === "#news");

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/#about"
              className="hidden items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90 md:flex"
            >
              <span>About Us</span>
              <FaArrowRight size={14} />
            </Link>
            <button
              className="text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="space-y-3 border-t border-border bg-card px-6 py-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block py-2 font-medium text-foreground/80 hover:text-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        style={{ transform: "translateY(calc(100% - 2px))", zIndex: 49 }}
      >
        <img src="/ripped-paper-header-1.png" alt="" className="block w-full" />
      </div>
    </div>
  );
};

export default Header;
