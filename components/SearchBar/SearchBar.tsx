import React from "react";
import { Icon } from "../Checkbox/styles";
import { Input, InputContainer } from "./styles";
import { SearchBarProps } from "./types";

const SearchBar: React.FC<SearchBarProps> = ({
  id,
  value,
  onValueChange,
  className,
}) => {
  return (
    <InputContainer className={className}>
      <Input
        id={id}
        placeholder="search..."
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onValueChange(event.target.value)
        }
      />
    </InputContainer>
  );
};

export default SearchBar;
