import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        bg-white
        border
        border-slate-200
        shadow-sm
        p-6
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}