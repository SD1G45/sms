import { ReactNode } from "react";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: ReactNode;
}
export interface ChevronProps extends React.HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}
