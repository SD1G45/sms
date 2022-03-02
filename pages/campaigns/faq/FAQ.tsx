import React from "react";
import SideNav from "../../../components/SideNav";
import { FlexContainer } from "../../../page-styles/campaigns/faq/styles";
import { ContainerDiv } from "../../../page-styles/coupons/styles";
import AccordionMenu from "../../../components/Accordion/AccordionMenu";

const FAQ = () => {
  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/keywords", "/keywords/create", "/keywords/faq"];
  const accordionItems = [
    {
      title: "How to Create a Campaign",
      content: (
        <div>
          {/* <strong>Body Header</strong> Body text <u>underline tag</u>,{" "} */}
          {/* <i>italic</i> */}
          Click <b>Create New</b> on the menu under the Campaigns
          <div>
            <ul>
              <br></br>
              <li>Set your campaign title</li>
              <li>Set a message you would like to send</li>
              <li>Set the coupons you'd like to send</li>
              <li>Set the customer list.d</li>
              <br></br>
            </ul>
          </div>
          Click the blue <b>Create Campaign</b> button to continue.
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
            Click <b>Analytics</b> on the menu under the Campaigns. You will be
            able to see your anaylitics by campaigns you've created.
            <br></br>
            <br></br>
            <li>
              <b>Messages sent</b> shows how many messages are sent.
            </li>
            <li>
              <b>Message success %</b> shows how many messages are sent
              successfully
            </li>
            <li>
              <b>Coupons opened</b> shows how many coupons are opened from those
              you have created within the campaign.
            </li>
            <li>
              <b>Coupons redeemed</b> shows how many coupons are redeemed within
              the campaign.
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
      <SideNav items={list} routes={routes} heading={"Campaigns"} />
      <FlexContainer>
        <AccordionMenu items={accordionItems} />
      </FlexContainer>
    </ContainerDiv>
  );
};

export default FAQ;
