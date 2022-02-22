import { useRouter } from "next/router";
import React from "react";
import SideNav from "../../../components/SideNav";
import { FlexContainer } from "../../../page-styles/coupons/faq/styles";
import { StyledAccordion } from "../../../page-styles/coupons/faq/styles";
import { ContainerDiv } from "../../../page-styles/coupons/styles";

const FAQ = () => {
  const router = useRouter();

  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/keywords", "/keywords/create", "/keywords/faq"];

  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Keywords"} />
      <FlexContainer>
        <StyledAccordion
          title="How to create a keyword"
          content="Click <b><q>Create New</q></b> on the menu under the Keywords. Set your keyword title, auto response text, description, and coupons. If you wish to continue, press the blue <b><q>Create Keyword</q></b> button"
        />
        <StyledAccordion
          title="How to check analytics"
          content="Click <b><q>Analytics</q></b> on the menu under the Keywords. You will be able to see your anaylitics by keywords you've created. 
          <b><q>Customers Onboarded</q></b> shows how many customers are signed up from using the specific keyword
          <b><q>Message success rate</q></b> shows what percentage of message sent was succesffuly delivered to a customer.
          <b><q>Coupons opened</q></b> shows how many coupons are opened from those you have created. 
          <b><q>Coupons redeemed</q></b> shows how many coupons are redeemed from those you have created. 
          <b><q>Open %</q></b> is calculated by (# of coupons opened / # of coupons created). 
          <b><q>Redeem %</q></b> is calculated by (# of coupons redeemed / # of coupons created)"
        />
      </FlexContainer>
    </ContainerDiv>
  );
};

export default FAQ;
