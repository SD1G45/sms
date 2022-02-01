import React from "react";
import Spinner from "../Spinner";
import { LoadingContainer, StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  invert,
  disabled,
  className,
  children,
  loading,
  ...other
}) => {
  return (
    <StyledButton
      invert={invert}
      disabled={disabled}
      className={className}
      loading={loading}
      {...other}
    >
      { loading && 
        <LoadingContainer>
          <Spinner size={20} sizeUnit="px" color="#fff"/>
          <div>Loading</div>
        </LoadingContainer>
      }
      { !loading && 
        children
      }
    </StyledButton>
  );
};

export default Button;
