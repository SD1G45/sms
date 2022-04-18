import React from "react";
import SideNav from "../../../components/SideNav";
import { FlexContainer } from "../../../page-styles/keywords/faq/styles";
import { ContainerDiv, FaqDiv } from "../../../page-styles/coupons/styles";
import AccordionMenu from "../../../components/Accordion/AccordionMenu";

const FAQ = () => {
  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/keywords", "/keywords/create", "/keywords/faq"];
  const accordionItems = [
    {
      title: "How to Create a Keyword",
      content: (
        <FaqDiv>
          {/* <strong>Body Header</strong> Body text <u>underline tag</u>,{" "} */}
          {/* <i>italic</i> */}
          Click <b>Create New</b> on the menu under the Keywords.
          <div>
            <ul>
              <br></br>
              <li>Set your keyword title</li>
              <li>Set an auto response text</li>
              <li>Set the keyword description</li>
              <li>Set the coupons for the keyword</li>
              <br></br>
            </ul>
          </div>
          If you wish to continue, press the blue <b>Create Keyword</b> button
        </FaqDiv>
      ),
    },
    {
      title: "How to Check Analytics",
      content: (
        <FaqDiv>
          {/* <strong>Body Header</strong> Body text <u>underline tag</u>,{" "} */}
          {/* <i>italic</i> */}
          <ul>
            Click <b>Analytics</b> on the menu under the Keywords. You will be
            able to see your anaylitics by keywords you've created.
            <br></br>
            <br></br>
            <li>
              <b>Customers Onboarded</b> shows how many customers are signed up
              from using the specific keyword
            </li>
            <li>
              <b>Message success rate</b> shows what percentage of message sent
              was succesffuly delivered to a customer.
            </li>
            <li>
              <b>Coupons opened</b> shows how many coupons are opened from those
              you have created.
            </li>
            <li>
              <b>Coupons redeemed</b> shows how many coupons are redeemed from
              those you have created.
            </li>
            <li>
              <b>Open %</b> is calculated by (# of coupons opened / # of coupons
              created).
            </li>
            <li>
              <b>Redeem %</b> is calculated by (# of coupons redeemed / # of
              coupons created)"
            </li>
          </ul>
        </FaqDiv>
      ),
    },
  ];
  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Keywords"} />
      <FlexContainer>
        <AccordionMenu items={accordionItems} />
      </FlexContainer>
    </ContainerDiv>
  );
};

export default FAQ;
