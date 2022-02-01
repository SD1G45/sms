export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  invert?: boolean;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
}
