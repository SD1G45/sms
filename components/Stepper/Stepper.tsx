import React from "react";
import { Container, Line, Step, StepTitle } from "./styles";
import { StepperProps } from "./types";

const Stepper: React.FC<StepperProps> = ({ steps, activeIndex }) => {
  return (
    <Container>
      {steps.map((value, index) => (
        <>
          <Step active={activeIndex === index} key={index}>
            {index + 1}
          </Step>
          <StepTitle>{value}</StepTitle>
          {index !== steps.length - 1 && <Line />}
        </>
      ))}
    </Container>
  );
};

export default Stepper;
