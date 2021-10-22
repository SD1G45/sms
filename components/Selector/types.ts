export interface SelectorProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  options: Options;
}

type Options = { name: string; id: string }[];
