import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import SideNav from "../../components/SideNav";
import Table from "../../components/Table";
import { useEffect } from "react";
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

const parseDate = (date: any) => {
  const dateObj = new Date(date);
  return (
    dateObj.getMonth() + "/" + dateObj.getDate() + "/" + dateObj.getFullYear()
  );
};

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
    "Open %",
    "Redeem %",
  ];
  const data: string[][] = [];
  const businessState = useBusinessState();

  const [getKeywords, keywordsQueryResult] = useLazyQuery(KEYWORD_QUERY);
  useEffect(() => {
    getKeywords({
      variables: {
        businessId: businessState?.businessId,
      },
    });
  }, [getKeywords, businessState]);

  const keywords =
    keywordsQueryResult.data != undefined
      ? keywordsQueryResult.data.keywords
      : [];

  for (let i = 0; i < keywords.length; i++) {
    const curr = keywords[i];
    data.push([
      curr.keyword,
      "02/23/22",
      curr.coupon.sentCount,
      "99%",
      curr.coupon.openCount,
      curr.coupon.redeemCount,
      `${Math.round((curr.coupon.openCount / (curr.sentCount || 1)) * 100)}%`,
      `${Math.round((curr.coupon.redeemCount / (curr.sentCount || 1)) * 100)}%`,
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
        <Table headers={tableHeaders} data={data} />
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default Keywords;
