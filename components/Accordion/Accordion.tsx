import React, { useState, useRef } from "react";
import {
  AccordionSection,
  StyledButton,
  StyledTitle,
  AccordionContent,
  AccordionText,
  ButtonDiv,
  StyledChevron,
} from "./styles";

import Chevron from "./Chevron";

const Accordion = (props: any) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon ");
  const [rotated, setRotated] = useState(false);

  const content = useRef(null);
  function toggleAccordion() {
    {
      rotated ? setRotated(false) : setRotated(true);
    }
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${props.content.current.scrollHeight}px`
    );
  }
  return (
    <>
      <AccordionSection>
        <StyledButton
          className={`accordion ${setActive}`}
          onClick={toggleAccordion}
        >
          <ButtonDiv>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledChevron
              className={`${setRotate}`}
              rotated={rotated}
              width={10}
              fill={"#777"}
            />
          </ButtonDiv>
        </StyledButton>
        <AccordionContent
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <AccordionText
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></AccordionText>
        </AccordionContent>
      </AccordionSection>
    </>
  );
};

export default Accordion;
