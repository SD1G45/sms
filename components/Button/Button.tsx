import React from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  invert,
  className,
  children,
  ...other
}) => {
  return (
    <StyledButton invert={invert} className={className} {...other}>
      {children}
    </StyledButton>
  );
};

export default Button;
