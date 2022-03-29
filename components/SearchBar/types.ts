export interface SearchBarProps {
  id?: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}
