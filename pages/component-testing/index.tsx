import React, { useState } from "react";
import Card from "../../components/Card";
import { StyledCard } from "../../components/Card/styles";
import Slider from "../../components/Slider";
import Stepper from "../../components/Stepper";
import { Page, TimerBox } from "../../page-styles/component-testing/styles";

const Test = () => {
  const [value, setValue] = useState(9);
  return (
    <Page>
      <StyledCard>
        <Slider
          value={value}
          onChange={(event: any) => setValue(event.target.value)}
        />
      </StyledCard>

      <TimerBox></TimerBox>
    </Page>
  );
};

export default Test;
