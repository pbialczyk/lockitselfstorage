import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: object | object[];
}

const SEOHead = ({ title, description, canonical, jsonLd }: SEOHeadProps) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const fullTitle = title ? `${title} | LOCKIT self storage` : (isEn ? "LOCKIT self storage — Storage units Szczecin" : "LOCKIT self storage — Boksy magazynowe Szczecin");
  const metaDescription = description || (isEn ? "Self-service storage units in Szczecin. Safe, modern, available 24/7. Units from 3 m² to 12 m². Online rental in 5 minutes." : "Samoobsługowe boksy magazynowe w Szczecinie. Bezpieczne, nowoczesne, dostępne 24/7. Boksy od 3 m² do 12 m². Wynajem online w 5 minut.");

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", metaDescription);
    setMeta("robots", "noindex, nofollow");
    setMeta("googlebot", "noindex, nofollow");
    setOg("og:title", fullTitle);
    setOg("og:description", metaDescription);
    setOg("og:type", "website");
    setOg("og:locale", isEn ? "en_US" : "pl_PL");
    setOg("og:site_name", "LOCKIT self storage Szczecin");
    setOg("og:url", `https://lockit.pl${canonical || "/"}`);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.href = `https://lockit.pl${canonical}`;
    }

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(s => s.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld]');
      scripts.forEach(s => s.remove());
    };
  }, [fullTitle, metaDescription, canonical, jsonLd]);

  return null;
};

export default SEOHead;
