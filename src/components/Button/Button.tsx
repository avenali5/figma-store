import React from "react";
import { ButtonStyle } from "./Button.style";

type Props = {
  children: any;
  onClick: () => void;
  type: "outline" | "solid";
};

const Button = ({ children, onClick, type }: Props) => {
  return (
    <ButtonStyle onClick={onClick} className={type}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
