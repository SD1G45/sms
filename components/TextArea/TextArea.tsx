import React from "react";
import {
  ErrorMessage,
  Label,
  LabelContainer,
  StyledTextArea,
  TextAreaContainer,
} from "./styles";
import { TextAreaProps } from "./types";

const TextArea = React.forwardRef<HTMLInputElement, TextAreaProps>(
  ({ error, errorMessage, value, label, className, type, ...other }, ref) => {
    return (
      <TextAreaContainer ref={ref} className={className}>
        <LabelContainer>
          <Label>{label || ""}</Label>
        </LabelContainer>
        <StyledTextArea
          type={type}
          error={error}
          {...other}
          value={value}
          rows={5}
        />
        {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TextAreaContainer>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
