import React, {useState } from "react";
import { CustomersTableProps } from "./types";
import {
    ViewButton,
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
import Link from "next/link";

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

function mapDataToBodyComponent(data: string[][], page: number, ids: string[], view: boolean): JSX.Element[] {
    const mapping: JSX.Element[] = [];
    const pageIndex = page - 1;


    for (let j = 0; j < 7 && pageIndex * 7 + j < data.length; j++) {
        const value = data[pageIndex * 7 + j];
        const map: JSX.Element[] = [];
        value.map((val, i) => {
            const content = view ? 
                <Data>{val}</Data>
                :
                <Data>
                <Link href={"/customers/view/" + ids[j]}>
                    <span>
                    {val}
                    <ViewButton>
                        View Customers
                    </ViewButton>
                    </span>
                </Link>
                </Data>
            const newItem = i == 0 ?
                <DataLong>{val}</DataLong>
                :
                (i == value.length - 1 ?
                    content
                    :
                    <Data>{val}</Data>
                );
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

const CustomersTable: React.FC<CustomersTableProps> = ({
    data,
    ids,
    view
}) => {
    const headers = view ? 
        ["First Name", "Last Name", "Phone #"]
        : ['Name', 'Description', 'Customers'];
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
                        mapDataToBodyComponent(data, page, ids, view)
                    }
                </TableBody>
            </DataTable>
            {
                numOfPages > 1 ? <PaginationSection /> : null
            }
        </DivContainer>
    )
}

export default CustomersTable;
