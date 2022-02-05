import React, { useState } from "react";
import Card from "../../components/Card";
import { StyledCard } from "../../components/Card/styles";
import Slider from "../../components/Slider";
import Stepper from "../../components/Stepper";
import {
  Page,
  TimerBox,
  IPhonePreview,
} from "../../page-styles/component-testing/styles";

import AccordionMenu from "../../components/Accordion/AccordionMenu";

const Test = () => {
  const [value, setValue] = useState(9);
  const accordionItems = [
    {
      title: "Item 1",
      content: (
        <div>
          <strong>Body Header</strong> Body text <u>underline tag</u>,{" "}
          <i>italic</i>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Item 2",
      content: (
        <div>
          <strong>Body Header</strong> Body text <u>underline tag</u>,{" "}
          <i>italic</i>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Item 3",
      content: (
        <div>
          <strong>Body Header</strong> Body text <u>underline tag</u>,{" "}
          <i>italic</i>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Page>
      <StyledCard>
        <AccordionMenu items={accordionItems} />
      </StyledCard>
    </Page>
  );
};

export default Test;
