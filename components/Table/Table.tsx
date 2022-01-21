import React from "react";
import { DivContainer, DataTable, TableHeader, TableBody, Header, HeaderLong, DataLong, Data } from "./styles";
import { TableProps } from "./types";

function mapDataToHeaderComponent(data: string[]): JSX.Element[] {
    const mapping: JSX.Element[] =[];

    data.map((value, i) => {
        const newItem = i == 0 ? 
        <HeaderLong>{value}</HeaderLong>
        :
        <Header>{value}</Header>;
        mapping.push(newItem);
    })

    return mapping;
}

function mapDataToBodyComponent(data: string[][]): JSX.Element[] {
    const mapping: JSX.Element[] = [];

    data.map((value) => { 
        const map: JSX.Element[] = [];
        value.map((val, i) => {
            const newItem = i == 0 ? 
            <DataLong>{val}</DataLong>
            :
            <Data>{val}</Data>;
            map.push(newItem);
        })
        mapping.push(<tr>{ map }</tr>)
    })

    return mapping;
}

const Table: React.FC<TableProps> = ({
    headers,
    data 
}) => {
    return (
        <DivContainer>
            <DataTable>
                <TableHeader>
                    <tr>
                        {
                            mapDataToHeaderComponent(headers)
                        }
                    </tr>
                </TableHeader>
                <TableBody>
                    {
                        mapDataToBodyComponent(data)
                    }
                </TableBody>
            </DataTable>
        </DivContainer>
    );
}

export default Table;