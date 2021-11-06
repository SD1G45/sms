import React from "react";
import Background from "../Background";
import Image from "next/image";
import { LeftTriangleDiv, Page, RightCircleDiv } from "./styles";

const SingleCardPage: React.FC = ({ children }) => {
  return (
    <Page>
      <Background />
      <LeftTriangleDiv>
        <Image
          src="/StackedTriangle-1.svg"
          width={200}
          height={300}
          alt="triangle"
        />
      </LeftTriangleDiv>
      {children}
      <RightCircleDiv>
        <Image src="/StackedCircle.svg" width={300} height={300} alt="circle" />
      </RightCircleDiv>
    </Page>
  );
};

export default SingleCardPage;
