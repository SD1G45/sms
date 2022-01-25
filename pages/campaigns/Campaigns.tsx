import React from "react";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import SideNav from "../../components/SideNav";
import Table from "../../components/Table";
import { useRouter } from "next/router";
import {
  RowDiv,
  SearchDiv,
  ColumnDiv,
  ContainerDiv,
  StyledHeader,
} from "../../page-styles/coupons/styles";
import { CampaignHeader } from "./styles";
import { HeaderDiv } from "../../page-styles/campaigns/styles";

const Campaigns = () => {
  const router = useRouter();
  const createPath = router.asPath + "/create";
  const faqPath = router.asPath + "/faq";

  const sideNavItems: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/campaigns", createPath, faqPath];
  const tableHeaders: string[] = [
    "Campaign",
    "Date sent",
    "Messages sent",
    "Message success rate",
    "Coupons opened",
    "Coupons redeemed",
    "Coupon open %",
    "Coupon redeem %",
  ];
  const dummyData: string[][] = [[
    "Main List - 10% OFF",
    "10/20/21",
    "8,123",
    "99%",
    "5,400",
    "400",
    "66%",
    "0.5%",
  ]];

  const onClick = () => {
    router.push(createPath);
  };

  return (
    <ContainerDiv>
      <SideNav items={sideNavItems} routes={routes} heading={"Campaigns"} />
      <ColumnDiv>
        <RowDiv>
          <HeaderDiv>
            <StyledHeader>Campaign Analytics</StyledHeader>
          </HeaderDiv>
          <SearchDiv>
            <SearchBar value={""} onValueChange={() => {}} />
          </SearchDiv>
          <Button>Create New Campaign</Button>
        </RowDiv>
        <Table headers={tableHeaders} data={dummyData} />
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default Campaigns;
