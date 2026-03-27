import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import lockitLogo from "@/assets/lockit-logo.png";

const navItems = [
  { label: "Główna", href: "/" },
  { label: "Boksy i cennik", href: "/boksy" },
  { label: "Lokalizacje", href: "/lokalizacje" },
  { label: "Dla kogo?", href: "/dla-klientow-indywidualnych" },
  { label: "Poradnik", href: "/poradnik" },
  { label: "O nas", href: "/o-nas" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-deep/95 backdrop-blur-md border-b border-brand/30">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={lockitLogo} alt="LOCKIT self storage" className="h-10 lg:h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? "text-primary-foreground bg-brand/40"
                    : "text-brand-light hover:text-primary-foreground hover:bg-brand/20"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+48666030717" className="flex items-center gap-2 text-sm text-brand-light hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" />
              666 030 717
            </a>
            <a
              href="https://wynajmij.lockit.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Zarezerwuj boks
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-light hover:text-primary-foreground transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-brand/20 mt-2 pt-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? "text-primary-foreground bg-brand/40"
                    : "text-brand-light hover:text-primary-foreground hover:bg-brand/20"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 px-4 space-y-2">
              <a href="tel:+48666030717" className="flex items-center gap-2 text-sm text-brand-light">
                <Phone className="w-4 h-4" />
                666 030 717
              </a>
              <a
                href="https://wynajmij.lockit.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="block gradient-brand text-primary-foreground px-5 py-3 rounded-lg text-sm font-bold text-center"
              >
                Zarezerwuj boks
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
