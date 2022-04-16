import Link from "next/link";
import React from "react";
import { useState } from "react";
import { StyledLink } from "../TextField/styles";
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
  EmptyData,
} from "./styles";
import { TableProps } from "./types";

function mapDataToHeaderComponent(
  data: string[],
  tableType: string
): JSX.Element[] {
  const mapping: JSX.Element[] = [];

  data.map((value, i) => {
    const newItem =
      i == 0 ? (
        <HeaderLong tableType={tableType}>{value}</HeaderLong>
      ) : (
        <Header>{value}</Header>
      );
    mapping.push(newItem);
  });

  return mapping;
}

function getDataJSXElement(
  val: string,
  index: number,
  tableType: string,
  lengthIndex: number,
  id: string
): JSX.Element {
  const newVal =
    val.length > lengthIndex ? val.slice(0, lengthIndex) + "...." : val;

  if (tableType == "coupons" || tableType == "keywords") {
    if (index == 0) return <></>;
    else if (index == 1)
      return (
        <DataLong>
          <span title="Click to edit coupon">
            {" "}
            <Link href={`http://localhost:3001/${tableType}/edit/${id}`}>
              <StyledLink>{newVal}</StyledLink>
            </Link>
          </span>
        </DataLong>
      );
    else return <Data>{val}</Data>;
  } else {
    if (index == 0) return <DataLong>{newVal}</DataLong>;
    else return <Data>{val}</Data>;
  }
}

function mapDataToBodyComponent(
  data: string[][],
  page: number,
  tableType: string
): JSX.Element[] {
  const mapping: JSX.Element[] = [];
  const pageIndex = page - 1;
  const lengthIndex = tableType == "Keyword" ? 5 : 12;

  if (data.length == 0) {
    return mapping;
  }

  for (let i = 0; i < 7 && pageIndex * 7 + i < data.length; i++) {
    const value = data[pageIndex * 7 + i];
    const map: JSX.Element[] = [];
    value.map((val, i) => {
      const newItem = getDataJSXElement(
        val,
        i,
        tableType,
        lengthIndex,
        value[0]
      );
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

const Table: React.FC<TableProps> = ({ headers, data, tableType }) => {
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
      {data.length == 0 ? (
        <EmptyData>
          Start creating campaigns to view your customer and marketing data!
        </EmptyData>
      ) : (
        ""
      )}
      {numOfPages > 1 ? <PaginationSection /> : null}
    </DivContainer>
  );
};

export default Table;
