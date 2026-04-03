import lockitLogo from "@/assets/lockit-logo.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className = "", variant = "light" }: LogoProps) => {
  return (
    <img
      src={lockitLogo}
      alt="Lockit Self Storage"
      className={`h-10 w-auto ${variant === "light" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
};

export default Logo;
