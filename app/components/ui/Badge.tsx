import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        bg-blue-100
        text-blue-700
        px-3
        py-1
        text-sm
        font-medium
        ${className}
      `}
    >
      {children}
    </span>
  );
}