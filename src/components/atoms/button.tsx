import { cn } from "@/utils";
import { ReactNode } from "react";

export const Button = ({
  children,
  className,
  leftIcon,
  color = "primary",
}: {
  children: ReactNode;
  className?: string;
  leftIcon?: ReactNode;
  color?: "primary" | "whatapp";
}) => {
  return (
    <button
      className={cn(
        "group relative inline-block focus:outline-none focus:ring",
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-0 translate-x-0 translate-y-0 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5",
          {
            "bg-[#25D366]": color === "whatapp",
            "bg-primary": color === "primary",
          },
        )}
      ></span>

      <div
        className={cn(
          "relative inline-block border-2 border-light px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75",
          {
            "flex items-center gap-2": leftIcon,
          },
        )}
      >
        {leftIcon && leftIcon}
        {children}
      </div>
    </button>
  );
};
