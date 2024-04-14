import { HTMLAttributes, ReactNode } from "react";
import {
  ButtonHierarchy,
} from "@/components/button/types/button-hierarchy.type";
import useButton from "@/components/button/use-button.hook";

interface ButtonWrapperProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  hierarchy: ButtonHierarchy;
}

export default function ButtonWrapper({
                                        children,
                                        onClick,
                                        hierarchy,
                                      }: ButtonWrapperProps) {

  const { renderButtonHierarchy } = useButton();

  const buttonStyles = renderButtonHierarchy[hierarchy];

  console.log(buttonStyles);

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}