import React from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ invert, children, ...other }) => {
  return (
    <StyledButton invert={invert} {...other}>
      {children}
    </StyledButton>
  );
};

export default Button;
