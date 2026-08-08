import { ReactNode } from "react";
import type { ElementType } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function Heading({
  children,
  level = 2,
  className = "",
}: HeadingProps) {
  const styles = {
    1: "text-5xl lg:text-6xl font-bold",
    2: "text-4xl lg:text-5xl font-bold",
    3: "text-3xl font-semibold",
    4: "text-2xl font-semibold",
  };

  const Tag = `h${level}` as ElementType;

  return (
    <Tag className={`${styles[level]} text-slate-900 ${className}`}>
      {children}
    </Tag>
  );
}