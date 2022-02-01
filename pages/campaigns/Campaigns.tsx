import React, { useEffect } from "react";
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
import { HeaderDiv } from "../../page-styles/campaigns/styles";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import { useLazyQuery } from "@apollo/client";
import { CAMPAIGN_QUERY } from "../../page-queries/campaigns";

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
  const data: string[][] = [[]];
  const businessState = useBusinessState();

  const [getCampaigns, campaignsQueryResult] = useLazyQuery(CAMPAIGN_QUERY);
  useEffect(() => {
    getCampaigns({
      variables: {
        businessId:
          businessState?.businessId || "13a1fcc2-dc74-4467-9eb4-b8ede588791d"
      },
    });
  }, [getCampaigns, businessState]);

  const campaigns = 
    campaignsQueryResult.data != undefined 
    ? campaignsQueryResult.data.campaign
    : [];
  console.log(campaigns);
  for (let i = 0; i < campaigns.length; i++) {
    const curr = campaigns[i];
    data.push([
      curr.name,
      new Date(curr.dateSent).toDateString(),
      curr.messagesSent,
      "100%",
      curr.couponsOpened,
      curr.couponsRedeemed,
      "75%",
      "80%"
    ]);
  }

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
        <Table headers={tableHeaders} data={data} />
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default Campaigns;
