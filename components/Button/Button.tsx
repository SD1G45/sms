import React from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  invert,
  disabled,
  className,
  children,
  ...other
}) => {
  return (
    <StyledButton
      invert={invert}
      disabled={disabled}
      className={className}
      {...other}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
