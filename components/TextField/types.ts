import React from "react";

export interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  className?: string;
}
