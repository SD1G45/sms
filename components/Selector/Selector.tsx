import React, { useEffect, useRef, useState } from "react";
import useHideOnClickOutside from "../../hooks/useHideOnClickOutisde";
import TextField from "../TextField";
import { DropDownCard, Option, SelectorContainer } from "./styles";
import { SelectorProps } from "./types";

const Selector: React.FC<SelectorProps> = ({
  searchValue,
  onSearchValueChange,
  selectedId,
  onSelect,
  options,
}) => {
  const [isHidden, setIsHidden, ref] =
    useHideOnClickOutside<HTMLDivElement>(true);

  const optionsFilter = options.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleOptionSelect = (id: string, name: string) => {
    onSearchValueChange(name);
    onSelect(id);
    setIsHidden(true);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isHidden) {
      setIsHidden(false);
    }

    onSearchValueChange(event.target.value);
  };

  return (
    <SelectorContainer ref={ref}>
      <TextField
        value={searchValue}
        onChange={handleSearchChange}
        onFocus={() => setIsHidden(false)}
      />
      {!isHidden && (
        <DropDownCard>
          {optionsFilter.length > 0 ? (
            optionsFilter.map(({ id, name }) => (
              <Option key={id} onClick={() => handleOptionSelect(id, name)}>
                {name}
              </Option>
            ))
          ) : (
            <Option>No results match your search.</Option>
          )}
        </DropDownCard>
      )}
    </SelectorContainer>
  );
};

export default Selector;
