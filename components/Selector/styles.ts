import styled from "styled-components";
import Card from "../Card";
import SearchBar from "../SearchBar";

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const DropDownCard = styled(Card)`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  position: absolute;
  width: 100%;
  top: 70px;
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
