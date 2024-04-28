import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  flexRowPosition?: boolean;
}

export default function Section({
                                  children,
                                  id,
                                  flexRowPosition,
                                }: SectionProps) {
  const getFlexRowPosition = flexRowPosition ? "flex-row" : "flex-col";

  return (
    <section
      id={id}
      className={`px-4 py-10 sm:px-10 sm:py-20 md:px-28 md:py-20 lg:py-28 flex ${getFlexRowPosition} gap-10`}
    >
      {children}
    </section>
  );
}