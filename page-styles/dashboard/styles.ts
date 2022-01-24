import styled from "styled-components";

import Card from "../../components/Card";

export const StyledCard = styled(Card)`
  justify-content: center;
  border-radius: 1em;
  &:hover {
    background-color: lightblue;
    translate: ;
  }
  text-align: center;
  cursor: grab;
`;
export const ContainerDiv = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin: auto;
`;

export const RowDiv = styled.div`
  display: flex;
  padding-top: 50px;
  width: 100%;
`;

export const StyledHeader = styled.h1`
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
`;
