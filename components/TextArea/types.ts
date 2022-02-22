import React from "react";

export interface TextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  type?: string;
}
