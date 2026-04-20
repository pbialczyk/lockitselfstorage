import lockitLogoDark from "@/assets/lockit-logo-color.png";
import lockitLogoLight from "@/assets/lockit-logo-light.png";

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
      className={`h-10 w-auto ${className}`}
    />
  );
};

export default Logo;
