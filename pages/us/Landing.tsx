import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Background from "../../components/Background";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TextArea from "../../components/TextArea";
import newRouteWithQueries from "../../helpers/newRouteWithQueries";
import { HeadingDiv } from "../../page-styles/business/team/styles";

import {
  LogoDiv,
  MainDiv,
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
  Spacing,
  EmailTextField,
  StyledCard,
  FirstNameTextField,
  PrismDiv,
} from "../../page-styles/landingpage/styles";
import {
  Heading,
  LinkDiv,
  PasswordTextField,
  StyledLink,
} from "../../page-styles/login/styles";

export const Landing = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onMessageSend = () => {
    if (email && firstName && message) {
      setEmail("");
      setFirstName("");
      setMessage("");
      setSent(true);
    }
  };
  const router = useRouter();
  return (
    <>
      <Background />
      <SplitDiv>
        <HeaderDiv>
          <StyledHeader>Flexible marketing</StyledHeader>
          <StyledHeader>Fit for Anyone </StyledHeader>
          <RightDiv>
            <Link href="/register">
              <StyledButton>Sign Up</StyledButton>
            </Link>

            <Link href="#contact">
              <StyledButton invert={true}>Learn More</StyledButton>
            </Link>
          </RightDiv>
        </HeaderDiv>
        <MainDiv>
          <Image src={"/man-holding-phone.gif"} width={"1000"} height={"600"} />
        </MainDiv>
      </SplitDiv>

      <Spacing />
      <Parallax speed={-15}>
        <MainDiv>
          <Image
            src={"/icons/pyramid-transparent.png"}
            width={150}
            height={150}
          />
        </MainDiv>
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
          <MainDiv>
            <HeaderDiv>
              <StyledHeader>Why Trism</StyledHeader>
              <BodyContainer>
                <HeaderDiv>
                  <StyledBody>
                    We believe there should be more options for people
                  </StyledBody>
                  <StyledBody>
                    when it comes to their marketing solutions.
                  </StyledBody>
                  <StyledBody></StyledBody>
                </HeaderDiv>
              </BodyContainer>

              <Image
                src={"/marketing-at-laptop.png"}
                width={500}
                height={500}
              />
            </HeaderDiv>
          </MainDiv>
        </Parallax>
      </div>

      <div id="how-it-works">
        <PrismDiv>
          <Image
            src={"/icons/pyramid-transparent.png"}
            width={150}
            height={150}
          />
        </PrismDiv>
        <Parallax speed={10}>
          <SplitDivTwo>
            <HeaderDiv>
              <StyledHeader>How does it work?</StyledHeader>
              <BodyContainer>
                <Image
                  src={"/provision-phone-number.gif"}
                  width={"1000"}
                  height={"600"}
                />
              </BodyContainer>

              <HeadingDiv></HeadingDiv>
              <HeadingDiv></HeadingDiv>
              <HeadingDiv></HeadingDiv>
              <Parallax speed={-3}>
                <Image
                  src={"/icons/pyramid-transparent.png"}
                  width={150}
                  height={150}
                />
              </Parallax>
              <HeadingDiv>
                <Heading>Create an account and choose a phone number.</Heading>
              </HeadingDiv>
              <BodyContainer></BodyContainer>
              <HeadingDiv></HeadingDiv>
              <HeadingDiv></HeadingDiv>
              <HeadingDiv></HeadingDiv>
              <BodyContainer>
                <Image src={"/couponSMS.png"} width={"340"} height={"700"} />
                <Image
                  src={"/redeemedCoupon.png"}
                  width={"340"}
                  height={"700"}
                />
                <Parallax speed={-20}>
                  <Image
                    src={"/icons/pyramid-transparent.png"}
                    width={150}
                    height={150}
                  />
                </Parallax>
              </BodyContainer>

              <HeadingDiv></HeadingDiv>
              <HeadingDiv></HeadingDiv>
              <HeadingDiv></HeadingDiv>
              <HeadingDiv>
                <Heading>
                  When a customer texts you, automatically send redeemable
                  coupons and programmtic messaging.
                </Heading>
              </HeadingDiv>
            </HeaderDiv>
          </SplitDivTwo>
        </Parallax>
      </div>
      <div id="contact">
        <Parallax speed={10}>
          <SplitDivTwo>
            <HeadingDiv>
              <HeaderDiv>
                <StyledCard>
                  <Heading>
                    {!sent
                      ? "Shoot us a message"
                      : "Awesome! We'll be in touch."}
                  </Heading>
                  {!sent && (
                    <>
                      <EmailTextField
                        id="email"
                        label="Email"
                        value={email}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setEmail(event.target.value)}
                      />

                      <FirstNameTextField
                        id="password"
                        label="Name"
                        value={firstName}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setFirstName(event.target.value)}
                      />

                      <TextArea
                        value={message}
                        label="Message"
                        onChange={(
                          event: React.ChangeEvent<HTMLTextAreaElement>
                        ) => setMessage(event.target.value)}
                      ></TextArea>

                      <Button
                        onClick={() => {
                          onMessageSend();
                        }}
                      >
                        Email us
                      </Button>
                    </>
                  )}

                  <LinkDiv>
                    <Link
                      href={newRouteWithQueries("/register", router)}
                      passHref
                    >
                      <StyledLink id="register">
                        Ready to sign up? Let's get started.
                      </StyledLink>
                    </Link>
                  </LinkDiv>
                </StyledCard>
              </HeaderDiv>
            </HeadingDiv>
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
