import React from "react";
import {
  ErrorMessage,
  Label,
  StyledTextField,
  TextFieldContainer,
} from "./styles";
import { TextFieldProps } from "./types";

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error, errorMessage, value, label, className, ...other }, ref) => {
    return (
      <TextFieldContainer ref={ref} className={className}>
        <Label>{label || ""}</Label>
        <StyledTextField type="text" error={error} {...other} value={value} />
        {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TextFieldContainer>
    );
  }
);

TextField.displayName = "TextField";
export default TextField;
