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
      <SideNav items={list} routes={routes} heading={"FAQ Keywords"} />
      <FlexContainer>
        <StyledAccordion
          title="How to create a keyword"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <StyledAccordion
          title="How to create a keyword"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <StyledAccordion
          title="How to create a keyword"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </FlexContainer>
    </ContainerDiv>
  );
};

export default FAQ;
