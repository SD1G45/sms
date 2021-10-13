import React from "react";
import { StyledButton } from "./styles";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ ...other }) => {
  return (
    <StyledButton invert={true} {...other}>
      Hello
    </StyledButton>
  );
};

export default Button;
