import { useRouter } from "next/router";
import React from "react";
import SideNav from "../../../components/SideNav";
import { FlexContainer } from "../../../page-styles/coupons/faq/styles";
import { StyledAccordion } from "../../../page-styles/coupons/faq/styles";
import { ContainerDiv } from "../../../page-styles/coupons/styles";

const FAQ = () => {
  const router = useRouter();

  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = [
    "/campaigns",
    "/campaigns/create",
    "/campaigns/faq",
  ];

  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Campaigns"} />
      <FlexContainer>
        <StyledAccordion
          title="How to create a campaign"
          content="Click <b><q>Create New</q></b> on the menu under the Campaigns. Set your campaign title, message you would like to send, coupons you'd like to send, and the customer list. Click the blue <b><q>Create Campaign</q></b> button to continue."
        />
        <StyledAccordion
          title="How to check analytics "
          content="Click <b><q>Analytics</q></b> on the menu under the Campaigns. You will be able to see your anaylitics by campaigns you've created. <b><q>Messages sent</q></b> shows how many messages are sent.
           <b><q>Message success %</q></b> shows how many messages are sent successfully 
           <b><q>Coupons opened</q></b> shows how many coupons are opened from those you have created within the campaign. 
           <b><q>Coupons redeemed</q></b> shows how many coupons are redeemed within the campaign. 
           <b><q>Open %</q></b> is calculated by (# of coupons opened / # of coupons created). 
           <b><q>Redeem %</q></b> is calculated by (# of coupons redeemed / # of coupons created)"
        />
      </FlexContainer>
    </ContainerDiv>
  );
};

export default FAQ;
