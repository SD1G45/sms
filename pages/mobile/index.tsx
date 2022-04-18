import React from "react";
import { Heading } from "../../page-styles/business/join/styles";
import { HeadingDiv } from "../../page-styles/create-business/styles";
import Image from "next/image";
import styled from "styled-components";
const StyledMobilePage = styled.div`
  padding-top: 100px;
`;
const StyledImageDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Mobile = () => {
  return (
    <StyledMobilePage>
      <HeadingDiv>
        <Heading>
          Oops! Trism isn't set up yet for mobile. Try logging in on a desktop
          instead!
        </Heading>
      </HeadingDiv>
      <StyledImageDiv>
        <Image src="/icons/circle-logo-black.png" width={100} height={100} />
      </StyledImageDiv>
    </StyledMobilePage>
  );
};
export default Mobile;
