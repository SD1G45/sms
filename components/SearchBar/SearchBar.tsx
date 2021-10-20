import React from "react";
import { Icon } from "../Checkbox/styles";
import { Input, InputContainer } from "./styles";
import { SearchBarProps } from "./types";

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <InputContainer className={className}>
      {/* <Icon>hello</Icon> */}
      <Input placeholder="search..." />
    </InputContainer>
  );
};

export default SearchBar;
