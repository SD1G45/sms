import styled from "styled-components";

import Card from "../../components/Card";

export const StyledCard = styled(Card)`
  justify-content: center;
  border-radius: 1em;
  &:hover {
    background-color: lightblue;
  }
  text-align: center;
  cursor: pointer;
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
  width: 100%;
  align-items: center;
`;

export const RowDiv = styled.div`
  display: flex;
  padding-top: 50px;
  width: 100%;
  gap: 10%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const StyledHeader = styled.h1`
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
`;
