export interface SelectorProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  selectedId: string;
  onSelect: (id: string) => void;
  options: Options;
}

type Options = { name: string; id: string }[];
