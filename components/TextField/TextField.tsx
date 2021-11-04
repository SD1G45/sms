import Link from "next/link";
import React from "react";
import {
  ErrorMessage,
  Label,
  LabelContainer,
  StyledLink,
  StyledTextField,
  TextFieldContainer,
} from "./styles";
import { TextFieldProps } from "./types";

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      error,
      errorMessage,
      value,
      label,
      className,
      type,
      linkText,
      linkValue,
      ...other
    },
    ref
  ) => {
    return (
      <TextFieldContainer ref={ref} className={className}>
        <LabelContainer>
          <Label>{label || ""}</Label>
          <Link href={linkValue || "/"}>
            <StyledLink>{linkText || ""}</StyledLink>
          </Link>
        </LabelContainer>
        <StyledTextField type={type} error={error} {...other} value={value} />
        {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TextFieldContainer>
    );
  }
);

TextField.displayName = "TextField";
export default TextField;
