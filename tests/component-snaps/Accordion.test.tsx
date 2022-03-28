import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Accordion from "../../components/Accordion";

const items = [
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
]

describe("<Accordion/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Accordion items={items}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});