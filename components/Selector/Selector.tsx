import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";
import SearchBar from "../SearchBar";
import TextField from "../TextField";
import {
  DropDownCard,
  Option,
  SelectorContainer,
  StyledSearchBar,
} from "./styles";
import { SelectorProps } from "./types";

const Selector: React.FC<SelectorProps> = ({
  searchValue,
  onSearchValueChange,
  selectedId,
  onSelect,
  options,
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef(null);
  const [dropDownIsVisible, setDropDownIsVisible] = useState(true);

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event: any) => {
    console.log(dropDownRef.current?.contains(event.target));
    console.log(inputRef.current?.contains(event.target));
    if (dropDownRef.current && inputRef.current) {
      if (
        !dropDownRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        console.log("here");
        setDropDownIsVisible(false);
      }
    }
  };

  const handleOptionSelect = (id: string, name: string) => {
    onSearchValueChange(name);
  };

  return (
    <SelectorContainer>
      {dropDownIsVisible ? "true" : "false"}
      <TextField
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onSearchValueChange(event.target.value)
        }
        ref={inputRef}
        onFocus={() => setDropDownIsVisible(true)}
      />
      {dropDownIsVisible && (
        <DropDownCard ref={dropDownRef}>
          {options
            .filter(({ name }) => name.includes(searchValue))
            .map(({ id, name }) => (
              <Option key={id} onClick={() => handleOptionSelect(id, name)}>
                {name}
              </Option>
            ))}
        </DropDownCard>
      )}
    </SelectorContainer>
  );
};

export default Selector;
