import React, { useEffect, useRef, useState } from "react";
import useHideOnClickOutside from "../../hooks/useHideOnClickOutisde";
import SearchBar from "../SearchBar";
import { StyledSearchBar } from "../Selector/styles";
import TextField from "../TextField";
import {
  DropDownCard,
  Option,
  MultiSelectorContainer,
  SelectionContainer,
  Selection,
  RemoveButton,
  Spacing,
  DropDownContainer,
  Label,
  LabelContainer,
  AddButton,
} from "./styles";
import { MultiSelectorProps } from "./types";

const MultiSelector: React.FC<MultiSelectorProps> = ({
  searchValue,
  onSearchValueChange,
  selectedOptions,
  onSelect,
  options,
  onRemove,
}) => {
  const [isHidden, setIsHidden, ref] =
    useHideOnClickOutside<HTMLDivElement>(true);

  const optionsFilter = options.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleOptionSelect = (id: string, name: string) => {
    onSearchValueChange("");
    onSelect({ id, name });
  };

  return (
    <MultiSelectorContainer ref={ref}>
      <LabelContainer>
        <Label>Customer lists</Label>
        <AddButton onClick={() => setIsHidden(false)} />
      </LabelContainer>
      <SelectionContainer>
        {selectedOptions.map(({ id, name }) => (
          <>
            <Selection key={id}>
              {name}
              <RemoveButton onClick={() => onRemove(id)} />
            </Selection>
            <Spacing />
          </>
        ))}
      </SelectionContainer>
      {!isHidden && (
        <DropDownContainer>
          <DropDownCard>
            <StyledSearchBar
              value={searchValue}
              onValueChange={onSearchValueChange}
            />
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
        </DropDownContainer>
      )}
    </MultiSelectorContainer>
  );
};

export default MultiSelector;
