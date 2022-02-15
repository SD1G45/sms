import React from "react";
import SideNav from "../../../components/SideNav";
import {
  StyledAccordion,
  FlexContainer,
} from "../../../page-styles/coupons/faq/styles";
import { ContainerDiv } from "../../../page-styles/coupons/styles";
import AccordionMenu from "../../../components/Accordion/AccordionMenu";

const FAQ = () => {
  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/coupons", "/coupons/create", "/coupons/faq"];
  const accordionItems = [
    {
      title: "How to Create a Coupon",
      content: (
        <div>
          {/* <strong>Body Header</strong> Body text <u>underline tag</u>,{" "} */}
          {/* <i>italic</i> */}
          Click <b>Analytics</b> on the menu under the Coupons.
          <ul>
            <br></br>
            <li>Set your coupon title</li>
            <li>Set the message you would like to send</li>
            <li>Set an expiration date/time</li>
            <li>Set the color</li>
            <br></br>
          </ul>
          The preview will show on the right side of your screen. If you wish to
          continue, press the blue <b>Create Coupon</b> button.
        </div>
      ),
    },
    {
      title: "How to Check Analytics",
      content: (
        <div>
          {/* <strong>Body Header</strong> Body text <u>underline tag</u>,{" "} */}
          {/* <i>italic</i> */}
          <ul>
            Click <b>Analytics</b> on the menu under the Coupons. You will be
            able to see your anaylitics by coupons you've created.
            <br></br>
            <br></br>
            <li>
              <b>Coupons created</b> shows how many coupons are created.
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
              coupons created).
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Coupons"} />
      <FlexContainer>
        <AccordionMenu items={accordionItems} />

        {/* <StyledAccordion
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
        /> */}
      </FlexContainer>
    </ContainerDiv>
  );
};

export default FAQ;
