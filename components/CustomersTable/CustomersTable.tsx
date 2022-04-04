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
    PagePointer,
    ListData
} from "./styles";
import Link from "next/link";

function mapDataToHeaderComponent(data: string[]): JSX.Element[] {
    const mapping: JSX.Element[] = [];

    data.map((value, i) => {
        const newItem = i == 0 ?
            <HeaderLong key={i}>{value}</HeaderLong>
            :
            <Header key={i} >{value}</Header>;
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
                <Data key={i}>{val}</Data>
                :
                <ListData key={i}>
                    <Link href={"/customers/view/" + ids[pageIndex * 7 + j]}>
                        <span>
                        {val}
                        {/* charAt 0 shows how many customers*/}
                        <ViewButton disabled={val.charAt(0) == '0'}>
                            View Customers
                        </ViewButton>
                        </span>
                    </Link>
                </ListData>
            const newItem = i == 0 ?
                <DataLong key={i}>{val}</DataLong>
                :
                (i == value.length - 1 ?
                    content
                    :
                    <Data key={i}>{val}</Data>
                );
            map.push(newItem);
        })
        mapping.push(<tr key={j}>{map}</tr>)
    }

    // Fill in rest of table if empty
    while (mapping.length < 7) {
        const map: JSX.Element[] = [];
        for (let i = 0; i < 8; i++) {
            map.push(<DataEmpty key={i}/>)
        }
        mapping.push(<tr key={mapping.length}>{map}</tr>);
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
                // pagination when needed
                numOfPages > 1 ? <PaginationSection /> : null
            }
        </DivContainer>
    )
}

export default CustomersTable;
