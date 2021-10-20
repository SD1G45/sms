import React from "react";
import { ErrorMessage, StyledTextField, TextFieldContainer } from "./styles";
import { TextFieldProps } from "./types";

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error, errorMessage, value, ...other }, ref) => {
    return (
      <TextFieldContainer ref={ref}>
        <StyledTextField type="text" error={error} {...other} value={value} />
        {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TextFieldContainer>
    );
  }
);

TextField.displayName = "TextField";
export default TextField;
