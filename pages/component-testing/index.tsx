import React from "react";
import Card from "../../components/Card";
import { StyledCard } from "../../components/Card/styles";
import Stepper from "../../components/Stepper";
import { Page } from "../../page-styles/component-testing/styles";

const Test = () => {
  return (
    <Page>
      <StyledCard>
        <Stepper steps={["One", "Two", "Three"]} activeIndex={1} />
      </StyledCard>
    </Page>
  );
};

export default Test;
