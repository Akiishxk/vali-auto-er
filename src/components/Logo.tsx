import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showSubtitle = false,
  size = "md",
  className = ""
}) => {
  // Size mappings for SVG icon
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12"
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl sm:text-3xl"
  };

  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      {/* Precision Mechanical Gear Icon matching business card */}
      <div className={`relative flex items-center justify-center flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Gear Teeth (10 Teeth) */}
          <path
            d="M50 10 
               L55 10 L57 18 L64 21 L70 16 L74 20 L70 27 L75 32 L82 30 L84 35 L78 41 L80 48 L88 50 L88 55 L80 57 L78 64 L84 70 L80 74 L73 70 L68 75 L70 82 L65 84 L59 78 L52 80 L50 88 L45 88 L43 80 L36 78 L30 84 L26 80 L30 73 L25 68 L18 70 L16 65 L22 59 L20 52 L12 50 L12 45 L20 43 L22 36 L16 30 L20 26 L27 30 L32 25 L30 18 L35 16 L41 22 L48 20 Z"
            fill={variant === "light" ? "#ffffff" : "#18181b"}
            stroke={variant === "light" ? "#a3e635" : "#18181b"}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Gear Outer Ring */}
          <circle cx="50" cy="50" r="28" fill={variant === "light" ? "#18181b" : "#27272a"} />
          {/* Lime Green Bright Center Core (#a3e635 / #84cc16) */}
          <circle cx="50" cy="50" r="18" fill="#a3e635" stroke="#84cc16" strokeWidth="2" />
          {/* Center Axle Hole */}
          <circle cx="50" cy="50" r="7" fill={variant === "light" ? "#ffffff" : "#18181b"} />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className={`font-black tracking-tight leading-none ${textSizes[size]} ${
          variant === "light" ? "text-white" : "text-black"
        }`}>
          VALLEY AUTO <span className="text-[#84cc16]">E.R.</span>
        </div>
        {showSubtitle && (
          <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#84cc16] mt-0.5">
            DANIEL JOETZKI • OWNER
          </div>
        )}
      </div>
    </div>
  );
};
