import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LLink from "@/i18n/LLink";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notFound.p")}</p>
        <LLink to="/" className="text-primary underline hover:text-primary/90">{t("notFound.home")}</LLink>
      </div>
    </div>
  );
};

export default NotFound;
