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

const parseDate = (date: any) => {
  const dateObj = new Date(date);
  return (
    dateObj.getMonth() + "/" + dateObj.getDate() + "/" + dateObj.getFullYear()
  );
};

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
    "Message success %",
    "Coupons opened",
    "Coupons redeemed",
    "Open %",
    "Redeem %",
  ];
  const data: string[][] = [];
  const businessState = useBusinessState();

  const [getCampaigns, campaignsQueryResult] = useLazyQuery(CAMPAIGN_QUERY);
  useEffect(() => {
    getCampaigns({
      variables: {
        businessId: businessState?.businessId,
      },
    });
  }, [getCampaigns, businessState]);

  const campaigns =
    campaignsQueryResult.data != undefined
      ? campaignsQueryResult.data.campaign
      : [];
  for (let i = 0; i < campaigns.length; i++) {
    const curr = campaigns[i];
    data.push([
      curr.name,
      parseDate(curr.dateSent),
      curr.messagesSent,
      "100%",
      curr.coupon.openCount,
      curr.coupon.redeemCount,
      `${
        Math.round((curr.coupon.openCount / (curr.sentCount || 1)) * 100) / 100
      }%`,
      `${
        Math.round((curr.coupon.redeemCount / (curr.sentCount || 1)) * 100) /
        100
      }%`,
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
