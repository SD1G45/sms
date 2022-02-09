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
  padding: 15px 80px;
`;

export const BorderDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid #BEC8D2;
  border-style: solid none;
`;

export const LeftChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 50px 21px 0px;
  justify-content: center;
  width: 100%
`;

export const RightChartDiv = styled(LeftChartDiv)`
  padding: 21px 50px 21px 50px;
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
  text-align: left;
  margin-top: 30px;
  width: 100%;
`;