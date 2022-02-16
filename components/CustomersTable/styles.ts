import styled from "styled-components";
import Button from "../Button";

export const DivContainer = styled.div`
    padding-left: 50px;
    width: 100%;
`;

export const DataTable = styled.table`
    padding-top: 30px;
    border-spacing: 0px 0px;
    borderCollapse: collapse; 
    width: 100%;
`;

export const TableHeader = styled.thead`
    
`;

export const TableBody = styled.tbody`

`;

export const Pagination = styled.div`
    float: right;
    padding-top: 5px;
`;

export const PagePointer = styled.div `
    cursor: pointer;
    display: inline;
    font-weight: bold;
    padding-left: 10px;
`;

export const Header = styled.th`
    border-bottom: 2.75px solid #C4C4C4;
    padding-bottom: 15px;
    padding-left: 300px;
    padding-top: 15px;
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
`;

export const HeaderLong = styled.th`
    border-bottom: 2.75px solid #C4C4C4;
    padding-bottom: 15px;
    padding-right: 140px;
    padding-top: 15px;
    font-size: 14px;
    text-align: left;
    width: 100%;
`;

export const Data = styled.td`
    border-bottom: 2.75px solid #C4C4C4;
    padding-bottom: 15px;
    padding-left: 300px;
    padding-top: 15px;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
`;

export const DataEmpty = styled.td`
    border-bottom: 2.75px solid #C4C4C4;
    padding-bottom: 60px;
    padding-right: 0px;
    font-size: 14px;
    font-weight: 500;
`;

export const DataLong = styled(Data)`
    padding-left: 0px;
    padding-right: 210px;
    font-weight: 500;
    text-align: left;
`;

export const ViewButton = styled(Button)`
    background-color: #4881F0;
    color: white;
    cursor: pointer;
    width: 50%;
    font-size: 0.75rem;
    padding: 10px 10px
`;