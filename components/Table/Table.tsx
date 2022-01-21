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

function mapDataToBodyComponent(data: string[]): JSX.Element[] {
    const mapping: JSX.Element[] =[];

    data.map((value, i) => {
        const newItem = i == 0 ? 
        <DataLong>{value}</DataLong>
        :
        <Data>{value}</Data>;
        mapping.push(newItem);
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
                    <tr>
                        {
                            mapDataToBodyComponent(data)
                        }
                    </tr>
                </TableBody>
            </DataTable>
        </DivContainer>
    );
}

export default Table;