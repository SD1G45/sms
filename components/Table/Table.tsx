import React from "react";
import { DivContainer, DataTable, TableBody, Header, HeaderLong } from "./styles";
import { TableProps } from "./types";

function mapDataToComponent(data: string[]): JSX.Element[] {
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
                            mapDataToComponent(headers)
                        }
                    </tr>
                    <tr>
                        {
                            mapDataToComponent(data)
                        }
                    </tr>
                </TableBody>
            </DataTable>
        </DivContainer>
    );
}

export default Table;