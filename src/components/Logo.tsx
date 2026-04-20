import lockitLogoDark from "@/assets/lockit-logo-color-360.webp";
import lockitLogoLight from "@/assets/lockit-logo-light-360.webp";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className = "", variant = "light" }: LogoProps) => {
  return (
    <img
      src={variant === "light" ? lockitLogoLight : lockitLogoDark}
      alt="Lockit Self Storage"
      width={181}
      height={70}
      loading="lazy"
      decoding="async"
      className={`h-10 w-auto ${className}`}
    />
  );
};

export default Logo;
