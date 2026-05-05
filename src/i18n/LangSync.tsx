import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import i18n from "./i18n";

export const getLangFromPath = (pathname: string): "pl" | "en" =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pl";

export const stripLang = (pathname: string): string => {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
};

const LangSync = () => {
  const location = useLocation();
  useEffect(() => {
    const lang = getLangFromPath(location.pathname);
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [location.pathname]);
  return null;
};

export default LangSync;
