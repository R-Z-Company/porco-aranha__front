import { ReactNode } from "react";

interface CardsWrapperProps {
  children: ReactNode;
}

export default function CardsWrapper({ children }: CardsWrapperProps) {
  return (
    <div
      className={"grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"}
    >
      {children}
    </div>
  );
}