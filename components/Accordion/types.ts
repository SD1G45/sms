import { Number } from "aws-sdk/clients/iot";

export interface ChevronProps extends React.HTMLAttributes<HTMLDivElement> {
  rotated?: boolean;
  className?: string;
  height?: number;
  width?: number;
  fill?: string;
}
