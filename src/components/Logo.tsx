import { Lock } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className = "", variant = "light" }: LogoProps) => {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const accentColor = "text-accent";

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="relative">
        <span className={`text-2xl font-extrabold tracking-tight ${textColor}`}>L</span>
        <Lock className={`inline w-5 h-5 -mx-0.5 ${accentColor}`} strokeWidth={2.5} />
        <span className={`text-2xl font-extrabold tracking-tight ${textColor}`}>ckit</span>
      </div>
      <span className={`text-[10px] font-semibold tracking-widest uppercase opacity-70 ${textColor} self-end mb-0.5`}>
        self storage
      </span>
    </div>
  );
};

export default Logo;
