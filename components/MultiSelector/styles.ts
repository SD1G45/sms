import styled from "styled-components";
import Card from "../Card";
import SearchBar from "../SearchBar";

export const MultiSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const SelectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const Selection = styled.div`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Spacing = styled.div`
  width: 5px;
`;

export const RemoveButton = styled.button`
  margin-left: 8px;
  right: 0px;
  top: 0px;
  width: 18px;
  height: 15px;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &::before {
    top: 0px;
    left: 7px;
    position: absolute;
    content: " ";
    height: 15px;
    width: 3px;
    background-color: white;
    transform: rotate(45deg);
  }
  &::after {
    top: 0px;
    position: absolute;
    left: 7px;
    content: " ";
    height: 15px;
    width: 3px;
    background-color: white;
    transform: rotate(-45deg);
  }
`;

export const AddButton = styled.div`
  margin-left: 8px;
  right: 0px;
  top: 0px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  &:hover {
    opacity: 1;
  }
  &::before {
    top: 6px;
    left: 11px;
    position: absolute;
    content: " ";
    height: 12px;
    width: 2px;
    background-color: white;
  }
  &::after {
    top: 6px;
    left: 11px;
    position: absolute;
    content: " ";
    height: 12px;
    width: 2px;
    background-color: white;
    transform: rotate(90deg);
  }
`;

export const DropDownContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const DropDownCard = styled(Card)`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  position: absolute;
  width: 100%;
  top: 0px;
`;

export const StyledSearchBar = styled(SearchBar)`
  padding: 10px;
`;

export const Option = styled.button`
  width: 100%;
  text-align: left;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;
