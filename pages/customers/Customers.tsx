import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import CustomersTable from "../../components/CustomersTable";
import {
  RowDiv,
  SearchDiv,
  ColumnDiv,
  ContainerDiv,
  StyledHeader,
} from "../../page-styles/coupons/styles";
import { HeaderDiv } from "../../page-styles/campaigns/styles";
import { useRouter } from "next/router";
import SideNav from "../../components/SideNav";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import { useLazyQuery } from "@apollo/client";
import { CUSTOMER_LIST_QUERY } from "../../page-queries/keywords/create";
import Image from "next/image";

const Customers = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<Array<Array<string>>>([[]]);
  const createPath = router.asPath + "/create";
  const faqPath = router.asPath + "/faq";

  const sideNavItems: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/customers", createPath, faqPath];
  const data: string[][] = [];
  const ids: string[] = [];

  const businessState = useBusinessState();
  const [getCustomersList, customerListQueryResult] =
    useLazyQuery(CUSTOMER_LIST_QUERY);
  useEffect(() => {
    getCustomersList({
      variables: {
        businessId:
          businessState?.businessId || "7a6a0a03-5196-4952-aa9b-248c9daf1827",
      },
    });
  }, [getCustomersList, businessState]);

  const customerLists =
    customerListQueryResult.data != undefined
      ? customerListQueryResult.data.customerLists
      : [];

  for (let i = 0; i < customerLists.length; i++) {
    const curr = customerLists[i];
    data.push([
      curr.name,
      String(curr.description),
      curr.count + " total customers",
    ]);
    ids.push(curr.id);
  }

  const onClick = () => {
    router.push(createPath);
  };

  return (
    <ContainerDiv>
      <SideNav items={sideNavItems} routes={routes} heading={"Customers"} />
      <ColumnDiv>
        <RowDiv>
          <HeaderDiv>
            <StyledHeader>
              <Image
                src="/Dashboard_icons/customer.svg"
                width="50"
                height="40"
              />
              Customer Analytics
            </StyledHeader>
          </HeaderDiv>
          <SearchDiv>
            <SearchBar
              value={search}
              onValueChange={(s: string) => {
                setSearch(s);
                setFilteredData(data.filter((d) => d[0].includes(s)));
              }}
            />
          </SearchDiv>
          <Button onClick={onClick}>Create New Customer List</Button>
        </RowDiv>
        <CustomersTable
          data={search.length > 0 ? filteredData : data}
          ids={ids}
          view={false}
        />
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default Customers;
