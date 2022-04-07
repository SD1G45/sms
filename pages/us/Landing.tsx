import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import Background from "../../components/Background";
import Button from "../../components/Button";
import Card from "../../components/Card";

import {
  LogoDiv,
  MainLogoDiv,
  Page,
  SplitDiv,
  StyledBackground,
  HeaderDiv,
  LineDiv,
  SecondHeader,
  StyledBody,
  StyledHeader,
  RightDiv,
  StyledButton,
  SplitDivTwo,
  BodyDiv,
  BodyContainer,
} from "../../page-styles/landingpage/styles";
import { StyledLink } from "../../page-styles/login/styles";

export const Landing = () => {
  return (
    <>
      <Background></Background>
      <SplitDiv>
        <HeaderDiv>
          <StyledHeader>Flexible marketing</StyledHeader>
          <StyledHeader>Fit for Anyone </StyledHeader>
          <RightDiv>
            <StyledButton>Sign Up</StyledButton>
            <StyledButton invert={true}>Learn More</StyledButton>
          </RightDiv>
        </HeaderDiv>
        <MainLogoDiv>
          <Image src={"/man-holding-phone.gif"} width={"1000"} height={"600"} />
        </MainLogoDiv>
      </SplitDiv>

      <Parallax speed={-10}>
        <Image
          src={"/icons/pyramid-transparent.png"}
          width={150}
          height={150}
        />
      </Parallax>

      <Parallax speed={10}>
        <SplitDivTwo>
          <HeaderDiv>
            <StyledHeader>Connect with SMS</StyledHeader>
            <BodyContainer>
              <BodyDiv>
                <SecondHeader>Business</SecondHeader>
                <StyledBody>
                  We develop data-driven strategies and use the latest
                </StyledBody>
                <StyledBody>
                  SMS technologies to drive growth for businesses that want to
                </StyledBody>
                <StyledBody>
                  stay connected to their customers or followers
                </StyledBody>
                <StyledBody>in a more meaningful and natural way.</StyledBody>
              </BodyDiv>
              <BodyDiv>
                <SecondHeader>Personal</SecondHeader>
                <StyledBody>Our products have a wide variety of</StyledBody>
                <StyledBody>
                  applications for friends, classrooms, or clubs
                </StyledBody>
                <StyledBody>
                  to keep track of information and offer a
                </StyledBody>
                <StyledBody>seamless check-in or reward system.</StyledBody>
              </BodyDiv>
            </BodyContainer>
          </HeaderDiv>
        </SplitDivTwo>
      </Parallax>
      <Parallax speed={-30}>
        <SplitDivTwo>
          <HeaderDiv>
            {/* <StyledHeader>Solutions for</StyledHeader>
            <BodyContainer>
              <Link href={"#"}>
                <StyledLink>Retail</StyledLink>
              </Link>
            </BodyContainer>
            <BodyContainer>
              <Link href={"#"}>
                <StyledLink>Retail</StyledLink>
              </Link>
            </BodyContainer>
            <BodyContainer>
              <Link href={"#"}>
                <StyledLink>Retail</StyledLink>
              </Link> */}
            {/* </BodyContainer> */}
          </HeaderDiv>
          <Parallax speed={10}>
            <Image
              src={"/icons/pyramid-transparent.png"}
              width={200}
              height={200}
            />
          </Parallax>
        </SplitDivTwo>{" "}
      </Parallax>
      <div id="why-trism">
        <Parallax speed={10}>
          <SplitDivTwo>
            <HeaderDiv>
              <StyledHeader>Why Trism</StyledHeader>
              <BodyContainer>
                <BodyDiv>
                  <StyledBody>
                    We believe there should be more options for people
                  </StyledBody>
                  <StyledBody>
                    when it comes to their marketing solutions.
                  </StyledBody>
                  <StyledBody></StyledBody>
                  <StyledBody>
                    People shouldn't be locked down because of their POS device
                  </StyledBody>
                  <StyledBody>or restricted to a single company.</StyledBody>
                </BodyDiv>
              </BodyContainer>
            </HeaderDiv>
          </SplitDivTwo>
        </Parallax>
      </div>
      <div id="how-it-works">
        <Parallax speed={10}>
          <SplitDivTwo>
            <HeaderDiv>
              <StyledHeader>How does it work?</StyledHeader>
              <BodyContainer></BodyContainer>
            </HeaderDiv>
          </SplitDivTwo>
        </Parallax>
      </div>
      <div id="contact">
        <Parallax speed={10}>
          <SplitDivTwo>
            <HeaderDiv>
              <StyledHeader>Need to know more?</StyledHeader>
              <BodyContainer></BodyContainer>
            </HeaderDiv>
          </SplitDivTwo>
        </Parallax>
      </div>
      <Parallax speed={10}>
        <SplitDivTwo>
          <HeaderDiv>
            {/* <StyledHeader>Solutions for</StyledHeader>
            <BodyContainer>
              <Link href={"#"}>
                <StyledLink>Retail</StyledLink>
              </Link>
            </BodyContainer>
            <BodyContainer>
              <Link href={"#"}>
                <StyledLink>Retail</StyledLink>
              </Link>
            </BodyContainer>
            <BodyContainer>
              <Link href={"#"}>
                <StyledLink>Retail</StyledLink>
              </Link> */}
            {/* </BodyContainer> */}
          </HeaderDiv>
          <Parallax speed={10}>
            <Image
              src={"/icons/pyramid-transparent.png"}
              width={200}
              height={200}
            />
          </Parallax>
        </SplitDivTwo>
      </Parallax>
    </>
  );
};

export default Landing;
