import Link from "next/link";
import React from "react";
import {
  ErrorMessage,
  Label,
  LabelContainer,
  StyledLink,
  StyledTextArea,
} from "./styles";
import { TextAreaProps } from "./types";

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({
    error,
    errorMessage,
    value,
    label,
    className,
    type,
    linkText,
    linkValue,
    height,
    ...other
  }) => {
    return (
      <>
        <LabelContainer>
          <Label>{label || ""}</Label>
          <Link href={linkValue || "/"}>
            <StyledLink>{linkText || ""}</StyledLink>
          </Link>
        </LabelContainer>
        <StyledTextArea
          type={type}
          error={error}
          height={height}
          {...other}
          value={value}
        />
        {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
