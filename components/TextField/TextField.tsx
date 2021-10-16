import React from "react";
import { ErrorMessage, StyledTextField, TextFieldContainer } from "./styles";
import { TextFieldProps } from "./types";

const TextField: React.FC<TextFieldProps> = ({
  error,
  errorMessage,
  value,
  ...other
}) => {
  return (
    <TextFieldContainer>
      <StyledTextField type="text" error={error} {...other} value={value} />
      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </TextFieldContainer>
  );
};

export default TextField;
