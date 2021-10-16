import React from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ invert, ...other }) => {
  return (
    <StyledButton invert={invert} {...other}>
      Hello
    </StyledButton>
  );
};

export default Button;
