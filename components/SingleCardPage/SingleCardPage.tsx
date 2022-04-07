import React from "react";
import Background from "../Background";
import Image from "next/image";
import { LeftTriangleDiv, Page, RightCircleDiv } from "./styles";
import { Parallax } from "react-scroll-parallax";

const SingleCardPage: React.FC = ({ children }) => {
  return (
    <Page>
      <Background />
      <Parallax speed={2}>
        <LeftTriangleDiv>
          <Image
            src="/StackedTriangle-1.svg"
            width={200}
            height={300}
            alt="triangle"
          />
        </LeftTriangleDiv>
      </Parallax>
      {children}

      <Parallax speed={110}>
        <RightCircleDiv>
          <Image
            src="/StackedCircle.svg"
            width={300}
            height={300}
            alt="circle"
          />
        </RightCircleDiv>
      </Parallax>
    </Page>
  );
};

export default SingleCardPage;
