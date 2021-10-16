import React from "react";

export interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  error?: boolean;
  errorMessage?: string;
}
