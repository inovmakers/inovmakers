import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export default function Paragraph({
  children,
  className = "",
}: ParagraphProps) {
  return (
    <p
      className={`text-slate-600 leading-7 text-base lg:text-lg ${className}`}
    >
      {children}
    </p>
  );
}