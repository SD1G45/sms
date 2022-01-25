import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import SideNav from "../../components/SideNav";

import Table from "../../components/Table";
import {
  ColumnDiv,
  ContainerDiv,
  RowDiv,
  SearchDiv,
  StyledHeader,
} from "../../page-styles/coupons/styles";
import { HeaderDiv } from "../../page-styles/keywords/create/styles";
const Keywords = () => {
  const router = useRouter();
  const createPath = router.asPath + "/create";
  const faqPath = router.asPath + "/faq";

  const sideNavItems: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/keywords", createPath, faqPath];
  const tableHeaders: string[] = [
    "Keyword",
    "Date created",
    "Messages sent",
    "Message success rate",
    "Coupons opened",
    "Coupons redeemed",
    "Coupon open %",
    "Coupon redeem %",
  ];
  const dummyData: string[] = [
    "5OFF",
    "10/20/21",
    "8,123",
    "99%",
    "5,400",
    "400",
    "66%",
    "0.5%",
  ];

  const onClick = () => {
    router.push(createPath);
  };

  return (
    <ContainerDiv>
      <SideNav items={sideNavItems} routes={routes} heading={"Keywords"} />
      <ColumnDiv>
        <RowDiv>
          <HeaderDiv>
            <StyledHeader>Keyword Analytics</StyledHeader>
          </HeaderDiv>
          <SearchDiv>
            <SearchBar value={""} onValueChange={() => {}} />
          </SearchDiv>
          <Button onClick={onClick}>Create New Keyword</Button>
        </RowDiv>
        <Table headers={tableHeaders} data={dummyData} />
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default Keywords;
