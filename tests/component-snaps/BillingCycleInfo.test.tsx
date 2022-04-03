import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import BillingCycleInfo from "../../components/BillingCycleInfo";

 const title = "title";
 const amount = "A lot";
 const subTitle= "sub";
 

 test("BillingCycleInfo renders correctly", () => {
     const tree = renderer.create(
      <BillingCycleInfo 
        title={title} 
        amount={amount} 
        subtitle={subTitle}
        linkRoute={"linkRoute"}
       viewLinkText={"text"}/>).toJSON();
      expect(tree).toMatchSnapshot();
 })

