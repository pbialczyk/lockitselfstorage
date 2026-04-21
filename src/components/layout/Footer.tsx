import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-brand-deep text-brand-light">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm leading-relaxed opacity-80">
              Samoobsługowe boksy magazynowe w Szczecinie. Bezpieczne, nowoczesne, dostępne 24/7.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://m.facebook.com/profile.php?id=61556380212197" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/lockitselfstorage24/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-primary-foreground font-bold text-sm mb-4">Oferta</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/boksy" className="hover:text-primary-foreground transition-colors">Boksy i cennik</Link></li>
              <li><Link to="/boksy/boks-s-szczecin" className="hover:text-primary-foreground transition-colors">Boks S — 3 m²</Link></li>
              <li><Link to="/boksy/boks-m-szczecin" className="hover:text-primary-foreground transition-colors">Boks M — 6 m²</Link></li>
              <li><Link to="/boksy/boks-l-szczecin" className="hover:text-primary-foreground transition-colors">Boks L — 12 m²</Link></li>
              <li><Link to="/lokalizacje" className="hover:text-primary-foreground transition-colors">Lokalizacje</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary-foreground font-bold text-sm mb-4">Dla kogo?</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dla-klientow-indywidualnych" className="hover:text-primary-foreground transition-colors">Klient indywidualny</Link></li>
              <li><Link to="/dla-firm" className="hover:text-primary-foreground transition-colors">Dla firm / B2B</Link></li>
              <li><Link to="/remont-przeprowadzka" className="hover:text-primary-foreground transition-colors">Remont i przeprowadzka</Link></li>
              <li><Link to="/archiwum-dokumentow" className="hover:text-primary-foreground transition-colors">Archiwum dokumentów</Link></li>
              <li><Link to="/dla-studentow" className="hover:text-primary-foreground transition-colors">Dla studentów</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary-foreground font-bold text-sm mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>ul. Gdańska 14C<br />70-661 Szczecin</span>
              </li>
              <li>
                <a href="tel:+48666030717" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  +48 666 030 717
                </a>
              </li>
              <li>
                <a href="mailto:info@lockit.pl" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  info@lockit.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* App Downloads */}
        <div className="border-t border-brand/20 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-primary-foreground">Pobierz aplikację:</span>
            <div className="flex gap-3 items-center">
              <a
                href="https://wynajmij.lockit.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand/30 hover:bg-brand/50 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                🌐 Aplikacja WWW
              </a>
              <a
                href="https://apps.apple.com/pl/app/lockit-self-storage/id6752020694"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pobierz w App Store"
                className="inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white px-4 py-2 rounded-lg transition-colors h-12"
              >
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] uppercase tracking-wide opacity-90">Pobierz w</span>
                  <span className="text-base font-semibold -mt-0.5">App Store</span>
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sprytki.userportal.lockit&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pobierz z Google Play"
                className="inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white px-4 py-2 rounded-lg transition-colors h-12"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 512 512" aria-hidden="true">
                  <path fill="#00C3FF" d="M325.3 234.3 104.3 13.6c-1-1-2.5.1-2 1.5l205.3 222.4z"/>
                  <path fill="#FF3A44" d="m104.3 498.4 221-221-17.7-19-205.3 222.4c-.5 1.4 1 2.6 2 1.5z"/>
                  <path fill="#FFE000" d="M464.2 233.4 379.6 184l-71 71 71 71 84.6-49.4c22.4-13.1 22.4-30.1 0-43.2z"/>
                  <path fill="#00D26A" d="M104.3 13.6c-2.6-1.4-5.6-1.6-8.3-.6L307.6 237.5l71.9-53.5z"/>
                  <path fill="#00B85C" d="M307.6 274.5 96 499c2.7 1 5.7.8 8.3-.6l275.3-160.9z"/>
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] uppercase tracking-wide opacity-90">Pobierz z</span>
                  <span className="text-base font-semibold -mt-0.5">Google Play</span>
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
            <p>© {new Date().getFullYear()} LOCKIT self storage. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-4">
              <Link to="/polityka-prywatnosci" className="hover:text-primary-foreground transition-colors">Polityka prywatności</Link>
              <Link to="/regulamin" className="hover:text-primary-foreground transition-colors">Regulamin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
