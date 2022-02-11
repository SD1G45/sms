import React from "react";
import { useState } from "react";
import {
    DivContainer,
    DataEmpty,
    Pagination,
    DataTable,
    TableHeader,
    TableBody,
    Header,
    HeaderLong,
    DataLong,
    Data,
    PagePointer
} from "./styles";
import { TableProps } from "./types";

function mapDataToHeaderComponent(data: string[]): JSX.Element[] {
    const mapping: JSX.Element[] = [];

    data.map((value, i) => {
        const newItem = i == 0 ?
            <HeaderLong>{value}</HeaderLong>
            :
            <Header>{value}</Header>;
        mapping.push(newItem);
    })

    return mapping;
}

function mapDataToBodyComponent(data: string[][], page: number): JSX.Element[] {
    const mapping: JSX.Element[] = [];
    const pageIndex = page - 1;

    for (let i = 0; i < 7 && pageIndex * 7 + i < data.length; i++) {
        const value = data[pageIndex * 7 + i];
        const map: JSX.Element[] = [];
        value.map((val, i) => {
            const newItem = i == 0 ?
                <DataLong>{val}</DataLong>
                :
                <Data>{val}</Data>;
            map.push(newItem);
        })
        mapping.push(<tr>{map}</tr>)
    }

    // Fill in rest of table if empty
    while (mapping.length < 7) {
        const map: JSX.Element[] = [];
        for (let i = 0; i < 8; i++) {
            map.push(<DataEmpty />)
        }
        mapping.push(<tr>{map}</tr>);
    }
    return mapping;
}

function customerData(data: string[][], page: number): JSX.Element[] {
    const mapping: JSX.Element[] = [];


    return mapping;
}

const customersTable = (data: string[][], page: number) => {
    const headers = ['Name', 'Description', 'Customers'];

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
                        mapDataToBodyComponent(data, page)
                    }
                </TableBody>
            </DataTable>
        </DivContainer>
    );
}

const Table: React.FC<TableProps> = ({
    headers,
    data
}) => {
    const [page, setPage] = useState(1);
    const numOfEntries = data.length;
    const numOfPages = Math.ceil(numOfEntries / 7);

    const PaginationSection = () => {
        return (
            <Pagination>
                Page {page} of {numOfPages}
                <PagePointer onClick={() => { setPage(page <= 1 ? 1 : page - 1) }}>
                    {"< "}
                </PagePointer>
                <PagePointer onClick={
                    () => { setPage(page >= numOfPages ? numOfPages : page + 1) }
                }>
                    {" >"}
                </PagePointer>
            </Pagination>
        );
    }

    if (headers == null) {
        return customersTable(data, page);
    }

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
                        mapDataToBodyComponent(data, page)
                    }
                </TableBody>
            </DataTable>
            {
                numOfPages > 1 ? <PaginationSection /> : null
            }
        </DivContainer>
    );
}

export default Table;