import React from "react";
import { StyledBackground, FirstColumn, Column, TiltedDiv } from "./styles";

const Background = () => {
  return (
    <StyledBackground>
      <TiltedDiv />
      <FirstColumn />
      <Column />
      <Column />
      <Column />
      <Column />
    </StyledBackground>
  );
};

export default Background;
