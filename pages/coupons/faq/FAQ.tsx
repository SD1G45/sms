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
        <StyledAccordion title="How to create a coupon" content="Click " />
        <StyledAccordion title="How to create a coupon" content="Click " />
        <StyledAccordion title="How to create a coupon" content="Click " />
      </FlexContainer>
    </ContainerDiv>
  );
};

export default FAQ;
