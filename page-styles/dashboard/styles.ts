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

export const SalesColumnDiv = styled(ColumnDiv)`
  border-left: 1px solid #BEC8D2;
  justify-content: center;
  padding: 0px;
`;

export const SalesInnerColumnDiv = styled(ColumnDiv)`
  padding: 30px 19px 30px 19px;
  gap: 11px;
`;

export const RowDiv = styled.div`
  display: flex;
  padding-top: 50px;
  width: 100%;
  gap: 10%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const SalesRowDiv = styled(RowDiv)`
  padding: 0px;
`;

export const SalesInnerRowTitleDiv = styled(RowDiv)`
  padding: 0px;
  gap: 0%;
  margin: 0%;
`;

export const StyledHeader = styled.h1`
  text-align: left;
  margin-top: 30px;
  width: 100%;
`;

export const SalesSmallText = styled.text`
  text-align: left;
  width: 100%;
  color: #888B8E;
  font-size: 12px;
`;

export const SalesLargeText = styled.text`
  text-align: left;
  width: 100%;
  font-size: 30px;
`;

export const SalesLinkText = styled.text`
  text-align: right;
  width: 100%;
  color: #4881F0;
  font-size: 8;
`;

export const SalesDivider = styled.div`
  width: 100%; 
  border-bottom: 1px solid #BEC8D2;
  margin: 15px 0px 7px 0px;
`;