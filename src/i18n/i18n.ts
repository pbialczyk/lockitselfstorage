import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pl } from "./locales/pl";
import { en } from "./locales/en";

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl as Record<string, unknown> },
    en: { translation: en as Record<string, unknown> },
  },
  lng: "pl",
  fallbackLng: "pl",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

export default i18n;
