import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
}

export default function Section({ children, id }: SectionProps) {
  return (
    <section
      id={id}
      className={"px-4 py-10 sm:px-10 sm:py-20 md:px-28 md:py-20 flex flex-col gap-10"}
    >
      {children}
    </section>
  );
}