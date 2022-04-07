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
  PagePointer,
  StyledButton,
  EmptyData
} from "./styles";
import { TableProps } from "./types";

function mapDataToHeaderComponent(data: string[], tableType: string): JSX.Element[] {
  const mapping: JSX.Element[] = [];

  data.map((value, i) => {
    const newItem =
      i == 0 ? <HeaderLong tableType={tableType}>{value}</HeaderLong> 
      : 
      <Header>{value}</Header>;
    mapping.push(newItem);
  });

  return mapping;
}

function mapDataToBodyComponent(
  data: string[][],
  page: number,
  tableType: string
): JSX.Element[] {
  const mapping: JSX.Element[] = [];
  const pageIndex = page - 1;
  const lengthIndex = tableType == 'Keyword' ? 5 : 12;

  if (data.length == 0) {
    return mapping;
  }

  for (let i = 0; i < 7 && pageIndex * 7 + i < data.length; i++) {
    const value = data[pageIndex * 7 + i];
    const map: JSX.Element[] = [];
    value.map((val, i) => {
      const newItem =
        i == 0 ? (
          <DataLong>{val.length > lengthIndex ? val.slice(0, lengthIndex) + "...." : val}</DataLong>
        ) : <Data>{val}</Data>;
      map.push(newItem);
    });
    mapping.push(<tr>{map}</tr>);
  }

  // Fill in rest of table if empty
  while (mapping.length < 7) {
    const map: JSX.Element[] = [];
    for (let i = 0; i < 8; i++) {
      map.push(<DataEmpty />);
    }
    mapping.push(<tr>{map}</tr>);
  }
  return mapping;
}

const Table: React.FC<TableProps> = ({ headers, data, tableType}) => {
  const [page, setPage] = useState(1);
  const numOfEntries = data.length;
  const numOfPages = Math.ceil(numOfEntries / 7);

  const PaginationSection = () => {
    return (
      <Pagination>
        Page {page} of {numOfPages}
        <PagePointer
          onClick={() => {
            setPage(page <= 1 ? 1 : page - 1);
          }}
        >
          {"< "}
        </PagePointer>
        <PagePointer
          onClick={() => {
            setPage(page >= numOfPages ? numOfPages : page + 1);
          }}
        >
          {" >"}
        </PagePointer>
      </Pagination>
    );
  };

  return (
    <DivContainer>
      <DataTable>
        <TableHeader>
          <tr>{mapDataToHeaderComponent(headers, tableType)}</tr>
        </TableHeader>
        <TableBody>{mapDataToBodyComponent(data, page, tableType)}</TableBody>
      </DataTable>
      {data.length == 0 ? <EmptyData>Start creating campaigns to view your customer and marketing data!</EmptyData> : ""}
      {numOfPages > 1 ? <PaginationSection /> : null}
    </DivContainer>
  );
};

export default Table;
