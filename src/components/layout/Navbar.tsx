import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Główna", href: "/" },
  { label: "Boksy i cennik", href: "/boksy" },
  { label: "Lokalizacje", href: "/lokalizacje" },
  {
    label: "Dla kogo?",
    href: "/dla-klientow-indywidualnych",
    children: [
      { label: "Klient indywidualny", href: "/dla-klientow-indywidualnych" },
      { label: "Dla firm / B2B", href: "/dla-firm" },
      { label: "Remont i przeprowadzka", href: "/remont-przeprowadzka" },
      { label: "Archiwum dokumentów", href: "/archiwum-dokumentow" },
      { label: "Dla studentów", href: "/dla-studentow" },
    ],
  },
  { label: "Poradnik", href: "/poradnik" },
  { label: "O nas", href: "/o-nas" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const location = useLocation();

  const isItemActive = (item: NavItem) =>
    location.pathname === item.href ||
    item.children?.some((c) => c.href === location.pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-deep/95 backdrop-blur-md border-b border-brand/30">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                      isItemActive(item)
                        ? "text-primary-foreground bg-brand/40"
                        : "text-brand-light hover:text-primary-foreground hover:bg-brand/20"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[240px]">
                    <div className="bg-brand-deep border border-brand/30 rounded-lg shadow-xl py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === child.href
                              ? "text-primary-foreground bg-brand/40"
                              : "text-brand-light hover:text-primary-foreground hover:bg-brand/20"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
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
              className="gradient-brand text-foreground px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Wynajmij boks
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
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    onClick={() => setMobileSubOpen(mobileSubOpen === item.href ? null : item.href)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isItemActive(item)
                        ? "text-primary-foreground bg-brand/40"
                        : "text-brand-light hover:text-primary-foreground hover:bg-brand/20"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileSubOpen === item.href ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileSubOpen === item.href && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                            location.pathname === child.href
                              ? "text-primary-foreground bg-brand/40"
                              : "text-brand-light hover:text-primary-foreground hover:bg-brand/20"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
            <div className="pt-3 px-4 space-y-2">
              <a href="tel:+48666030717" className="flex items-center gap-2 text-sm text-brand-light">
                <Phone className="w-4 h-4" />
                666 030 717
              </a>
              <a
                href="https://wynajmij.lockit.pl"
                target="_blank"
                rel="noopener noreferrer"
              className="block gradient-brand text-foreground px-5 py-3 rounded-lg text-sm font-bold text-center"
              >
                Wynajmij boks
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
