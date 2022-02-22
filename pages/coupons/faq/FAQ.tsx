import React from "react";
import SideNav from "../../../components/SideNav";
import {
  StyledAccordion,
  FlexContainer,
} from "../../../page-styles/coupons/faq/styles";
import { ContainerDiv } from "../../../page-styles/coupons/styles";

const FAQ = () => {
  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/coupons", "/coupons/create", "/coupons/faq"];

  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Coupons"} />
      <FlexContainer>
        <StyledAccordion
          title="How to create a coupon"
          content="Click <b><q>Create New</q></b> on the menu under the Coupons. Set your coupon title, message you would like to send, expiration date/time, and the color. The preview will show on the right side of your screen. If you wish to continue, press the blue <b><q>Create Coupon</q></b> button. You're all set!"
        />
        <StyledAccordion
          title="How to check analytics"
          content="Click <b><q>Analytics</q></b> on the menu under the Coupons. You will be able to see your anaylitics by coupons you've created. 
          <b><q>Coupons created</q></b> shows how many coupons are created. 
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
