import React from "react";
import SideNav from "../../../components/SideNav";
import { FlexContainer } from "../../../page-styles/keywords/faq/styles";
import { ContainerDiv } from "../../../page-styles/coupons/styles";
import AccordionMenu from "../../../components/Accordion/AccordionMenu";

const FAQ = () => {
  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = [
    "/customers",
    "/customers/create",
    "/customers/faq",
  ];
  const accordionItems = [
    {
      title: "How to Create a Customer List",
      content: (
        <div>
          {/* <strong>Body Header</strong> Body text <u>underline tag</u>,{" "} */}
          {/* <i>italic</i> */}
          Click <b>Create New</b> on the menu under the Customers.
          <div>
            <ul>
              <br></br>
              <li>Set your customer name</li>
              <li>Set the customer description</li>
              <br></br>
            </ul>
          </div>
          If you wish to continue, press the blue <b>Create Customer List</b>{" "}
          button
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
            Click <b>Analytics</b> on the menu under the Customers. You will be
            able to see your anaylitics by customer list you have created.
            <br></br>
            <br></br>
            <li>
              <b>Name</b> shows the name of the customer list you have created.
            </li>
            <li>
              <b>Description</b> shows the description of the customer list.
            </li>
            <li>
              <b>Customers</b> shows the customers data in the customer list
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Customers"} />
      <FlexContainer>
        <AccordionMenu items={accordionItems} />
      </FlexContainer>
    </ContainerDiv>
  );
};

export default FAQ;
