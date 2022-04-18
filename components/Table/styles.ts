import styled from "styled-components";
import Button from "../Button";
import { stylesProps } from "./stylesType";

export const DivContainer = styled.div`
  padding-left: 50px;
  width: 100%;
`;

export const DataTable = styled.table`
  padding-top: 30px;
  border-spacing: 0px 0px;
  width: 100%;
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;

export const Pagination = styled.div`
  float: right;
  padding-top: 5px;
`;

export const PagePointer = styled.div`
  cursor: pointer;
  display: inline;
  font-weight: bold;
  padding-left: 10px;
`;

export const Header = styled.th`
  border-bottom: 2.75px solid #c4c4c4;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-top: 15px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledButton = styled(Button)``;

export const HeaderLong = styled.th<stylesProps>`
  border-bottom: 2.75px solid #c4c4c4;
  padding-bottom: 15px;
  padding-right: ${(props) => (props.tableType == "keywords" ? "0px" : "100px")};
  padding-top: 15px;
  font-size: 14px;
  text-align: left;
`;

export const Data = styled.td`
  border-bottom: 2.75px solid #c4c4c4;
  padding-bottom: 11.5px;
  padding-left: 58px;
  padding-top: 11.5px;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  color: black;

`;

export const DataEmpty = styled.td`
  border-bottom: 2.75px solid #c4c4c4;
  padding-bottom: 46.5px;
  padding-right: 60px;
  font-size: 14px;
  font-weight: 500;
`;

export const DataLong = styled(Data)`
  padding-left: 0px;
  padding-right: 40px;
  font-weight: 500;
  text-align: left;
`;

export const EmptyData = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  justify-content: center;
  background-color: #c4c4c4;
  height: 100%;
  color: black;
  padding: 100px;
  border-radius: 1.5px;
`;
