import { cn } from "@/utils";

export type SectionVariant = "dark";

export const sectionVariants: Record<SectionVariant, string> = {
  dark: "gray-800",
};
export const Section = ({
  children,
  className,
  variant = "dark",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
}>) => {
  return (
    <section
      className={cn("py-6 lg:py-12", className, sectionVariants[variant])}
    >
      {children}
    </section>
  );
};
