import lockitLogo from "@/assets/lockit-logo-color.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className = "", variant = "light" }: LogoProps) => {
  return (
    <img
      src={lockitLogo}
      alt="Lockit Self Storage"
      width={181}
      height={70}
      className={`h-10 w-auto ${className}`}
    />
  );
};

export default Logo;
