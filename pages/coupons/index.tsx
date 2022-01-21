import React from "react";
import SideNav from "../../components/SideNav";
import SearchBar from "../../components/SearchBar";
import {
  StyledHeader,
  ContainerDiv,
  ColumnDiv,
  RowDiv,
  SearchDiv,
} from "../../page-styles/coupons/styles";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useRouter } from "next/router";

const index = () => {

  const router = useRouter();
  const createPath = router.asPath + "/create";
  const faqPath = router.asPath + "/faq"

  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/coupons", createPath, faqPath];
  const headers: string[] = [
    "Name",
    "Date Created",
    "Date Modified",
    "Coupons created",
    "Coupons opened",
    "Coupons redeemed",
    "Open %",
    "Redeem %",
  ];
  const data: string[] = [
    "BOGO Fries",
    "10/10/10",
    "10/20/21",
    "4321",
    "2001",
    "103",
    "46%",
    "2.3%",
  ];

  const onClick = () => {
    router.push(createPath);
  };

  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Coupons"} />
      <ColumnDiv>
        <RowDiv>
          <StyledHeader>Coupon Analytics</StyledHeader>
          <SearchDiv>
            <SearchBar value={""} onValueChange={() => {}} />
          </SearchDiv>
          <Button onClick={onClick}>Create new coupon</Button>
        </RowDiv>
        <Table headers={headers} data={data} />
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default index;
