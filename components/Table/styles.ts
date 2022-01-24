import styled from "styled-components";

export const DivContainer = styled.div`
    padding-left: 50px;
    width: 100%;
`;

export const DataTable = styled.table`
    padding-top: 30px;
    border-spacing: 0px 0px;
    borderCollapse: collapse; 
`;

export const TableHeader = styled.thead`
    
`;

export const TableBody = styled.tbody`

`;

export const Header = styled.th`
    border-bottom: 2.75px solid #C4C4C4;
    padding-bottom: 15px;
    padding-right: 60px;
    padding-top: 15px;
    font-size: 14px;
`;

export const HeaderLong = styled.th`
    border-bottom: 2.75px solid #C4C4C4;
    padding-bottom: 15px;
    padding-right: 100px;
    padding-top: 15px;
    font-size: 14px;
    text-align: left;
`;

export const Data = styled.td`
    border-bottom: 2.75px solid #C4C4C4;
    padding-bottom: 15px;
    padding-right: 60px;
    padding-top: 15px;
    font-size: 14px;
    font-weight: 500;
`;

export const DataLong = styled(Data)`
    padding-right: 100px;
    font-weight: 500;
    text-align: left;
`;