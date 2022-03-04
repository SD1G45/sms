import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { StyledCard } from "../../components/Card/styles";
import Slider from "../../components/Slider";
import Stepper from "../../components/Stepper";
import {
  Page,
  TimerBox,
  IPhonePreview,
  pageLoadingDiv,
  StyledLoadCard,
} from "../../page-styles/component-testing/styles";
import LoadingDiv from "../../components/LoadingDiv";
import AccordionMenu from "../../components/Accordion/AccordionMenu";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import { LinkDiv, StyledLink } from "../../page-styles/login/styles";
import Link from "next/link";
import newRouteWithQueries from "../../helpers/newRouteWithQueries";
import { useRouter } from "next/router";
const Test = () => {
  const [value, setValue] = useState(9);

  const [pageLoading, setPageLoading] = useState(false);

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

  const router = useRouter();
  const pageLoadingDisplay = () => {
    return <StyledLoadCard>Hello</StyledLoadCard>;
  };

  return (
    <>
      <Page>
        {pageLoading && (
          <LoadingDiv>
            <Spinner size={50} sizeUnit="px" color="#9999" />
          </LoadingDiv>
        )}
        <StyledCard>
          <Button onClick={() => setPageLoading(true)}>Load</Button>
          {/* <AccordionMenu items={accordionItems} /> */}
        </StyledCard>
      </Page>
    </>
  );
};

export default Test;
