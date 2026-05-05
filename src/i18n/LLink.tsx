import { forwardRef } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import { getLangFromPath } from "./LangSync";

export const useLocalePath = () => {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  return (path: string) => {
    if (!path.startsWith("/")) return path;
    if (lang === "en") {
      if (path === "/") return "/en";
      return `/en${path}`;
    }
    return path;
  };
};

const LLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => {
  const localePath = useLocalePath();
  const newTo = typeof to === "string" ? localePath(to) : to;
  return <Link ref={ref} to={newTo} {...rest} />;
});
LLink.displayName = "LLink";

export default LLink;
