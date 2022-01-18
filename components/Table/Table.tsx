import React from "react";
import { DivContainer, DataTable, TableBody, Header, HeaderLong, BodyLong, Body } from "./styles";
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
        <BodyLong>{value}</BodyLong>
        :
        <Body>{value}</Body>;
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
                <TableBody>
                    <tr>
                        {
                            mapDataToHeaderComponent(headers)
                        }
                    </tr>
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