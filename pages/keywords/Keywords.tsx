import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import SideNav from "../../components/SideNav";
import Table from "../../components/Table";
import { useState, useEffect } from "react";
import { ColumnDiv, ContainerDiv, RowDiv, SearchDiv, StyledHeader } from "../../page-styles/coupons/styles";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import { KEYWORD_QUERY } from "../../page-queries/keywords/create";
import { useLazyQuery } from "@apollo/client";

const Keywords = () => {

  const router = useRouter();
  const createPath = router.asPath + "/create";
  const faqPath = router.asPath + "/faq"

  const sideNavItems: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/keywords", createPath, faqPath];
  const tableHeaders: string[] = ["Keyword", "Date created", "Messages sent", "Message success rate", "Coupons opened", "Coupons redeemed", "Coupon open %", "Coupon redeem %"]; 
  const dummyData: string[][] = [[]];
  const [data, setData] = useState<string[]>([]);
  const businessState = useBusinessState();

  const [getKeywords, keywordsQueryResult] = useLazyQuery(KEYWORD_QUERY);
  useEffect(() => {
    getKeywords({
      variables: {
        businessId: businessState?.businessId || "029c9ee3-3c24-4687-8962-b050ba4d0af0", 
      },
    });
  }, [getKeywords, businessState]);

  const keywords = keywordsQueryResult.data != undefined ? keywordsQueryResult.data.keywords : [];
  
  for (let i = 0; i < keywords.length; i++) {
    console.log(keywords[i]);
    dummyData.push([keywords[i].keyword, "10/20/21", "8,123", "99%", "5,400", "400" + i, "66%", "0.5%"])
  }

  const onClick = () => {
    router.push(createPath);
  };

  return (
    <ContainerDiv>
      <SideNav items={sideNavItems} routes={routes} heading={"Keywords"}/>
      <ColumnDiv>
          <RowDiv>
            <StyledHeader>Keyword Analytics</StyledHeader>
            <SearchDiv>
              <SearchBar value={""} onValueChange={() => {}}/>
            </SearchDiv>
            <Button onClick={onClick}>Create New Keyword</Button>
          </RowDiv>
          <Table headers={tableHeaders} data={dummyData}/>
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default Keywords;