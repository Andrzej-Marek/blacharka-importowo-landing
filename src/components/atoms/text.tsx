import { cn } from "@/utils";
import React, { ElementType } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "small";

interface Props {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  withLine?: boolean;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  small: "p",
};

const sizes: Record<Variant, string> = {
  h1: "text-4xl sm:text-5xl md:text-6xl font-bold",
  h2: "text-4xl font-semibold ",
  h3: "text-3xl font-semibold ",
  h4: "text-2xl font-semibold ",
  h5: "text-xl font-semibold",
  body: "text-md",
  small: "text-sm",
};

export const Text = ({
  variant = "body",
  children,
  className,
  as,
  withLine,
}: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  const Element = (
    <Tag className={cn({ "ml-4": withLine }, sizeClasses, className)}>
      {children}
    </Tag>
  );

  if (withLine) {
    return <div className="left-line">{Element}</div>;
  }

  return Element;
};
