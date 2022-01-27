import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import SideNav from "../../components/SideNav";
import Table from "../../components/Table";
import { useState, useEffect } from "react";
import {
  ColumnDiv,
  ContainerDiv,
  RowDiv,
  SearchDiv,
  StyledHeader,
} from "../../page-styles/coupons/styles";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import { KEYWORD_QUERY } from "../../page-queries/keywords/create";
import { useLazyQuery } from "@apollo/client";
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
    "Customers Onboarded",
    "Message success rate",
    "Coupons opened",
    "Coupons redeemed",
    "Coupon open %",
    "Coupon redeem %",
  ];
  const dummyData: string[][] = [[]];
  const [data, setData] = useState<string[]>([]);
  const businessState = useBusinessState();

  const [getKeywords, keywordsQueryResult] = useLazyQuery(KEYWORD_QUERY);
  useEffect(() => {
    getKeywords({
      variables: {
        businessId:
          businessState?.businessId || "6d1faded-428f-4374-bd2c-9af3f0a99f8d",
      },
    });
  }, [getKeywords, businessState]);

  const keywords =
    keywordsQueryResult.data != undefined
      ? keywordsQueryResult.data.keywords
      : [];

  for (let i = 0; i < keywords.length; i++) {
    const curr = keywords[i];
    dummyData.push([
      curr.keyword,
      new Date(curr.dateCreated).toDateString(),
      curr.customersOnboarded,
      "99%",
      curr.couponsOpened,
      curr.couponsRedeemed,
      "66%",
      "0.5%",
    ]);
  }

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
