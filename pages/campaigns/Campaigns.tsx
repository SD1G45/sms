import React from "react";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import SideNav from "../../components/SideNav";
import Table from "../../components/Table";
import { ColumnDiv, ContainerDiv, RowDiv, SearchDiv } from "../../page-styles/coupons/styles";
import { CampaignHeader } from "./styles";

const Campaigns = () => {

  const sideNavItems: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/campaigns", "/create-campaign", "/faq-campaign"];
  const tableHeaders: string[] = ["Campaign", "Date sent", "Messages sent", "Message success rate", "Coupons opened", "Coupons redeemed", "Coupon open %", "Coupon redeem %"]; 
  const dummyData: string[][] = [["Main List - 10% OFF", "10/20/21", "8,123", "99%", "5,400", "400", "66%", "0.5%"]];

  return (
    <ContainerDiv>
      <SideNav items={sideNavItems} routes={routes} heading={"Campaigns"}/>
      <ColumnDiv>
          <RowDiv>
            <CampaignHeader>Campaign Analytics</CampaignHeader>
            <SearchDiv>
              <SearchBar value={""} onValueChange={() => {}}/>
            </SearchDiv>
            <Button>Create New Campaign</Button>
          </RowDiv>
          <Table headers={tableHeaders} data={dummyData}/>
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default Campaigns;