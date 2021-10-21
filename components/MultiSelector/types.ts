export interface MultiSelectorProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  selectedOptions: Option[];
  onSelect: (option: Option) => void;
  onRemove: (id: string) => void;
  options: Option[];
}

type Option = { name: string; id: string };
