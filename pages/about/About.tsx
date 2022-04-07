import {
  StyledHeader,
  ContainerDiv,
  ColumnDiv,
  RowDiv,
  HeaderDiv,
  LineDiv,
  StyledBody,
  SecondHeader,
  SecondBody,
  SecondHeaderDiv,
  ImageDiv,
} from "../../page-styles/aboutus/styles";
import Image from "next/image";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
const About = () => {
  const parallax = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: [-40, 4],
  });
  return (
    <ContainerDiv>
      <ColumnDiv>
        <RowDiv>
          <ImageDiv>
            <Parallax speed={20}>
              <Image
                src="/aboutusblack.png"
                width={1300}
                height={300}
                alt="circle"
              />
            </Parallax>
          </ImageDiv>
          <HeaderDiv>
            <div ref={parallax.ref}>
              <StyledHeader>The Leading</StyledHeader>
              <StyledHeader>SMS Marketing </StyledHeader>
              <StyledHeader>Platform in</StyledHeader>
              <StyledHeader>Orlando, FL</StyledHeader>
            </div>
            <LineDiv></LineDiv>

            <StyledBody>
              We develop data-driven strategies and use the latest
            </StyledBody>
            <StyledBody>
              SMS technologies to drive growth for businesses that want to
            </StyledBody>
            <StyledBody>disrupt their industries.</StyledBody>
          </HeaderDiv>
          <SecondHeaderDiv>
            <SecondHeader>About Trism</SecondHeader>

            <SecondBody>
              If you are a small business looking to reach your customers, your
              options are fairly limited today. Similarly, if you are a consumer
              looking to passively receive marketing from businesses you are a
              patron of, your options are fairly limited as well. Trism is an
              SMS marketing platform designed to be unique, fresh, and simple
              for both small businesses and consumers.
            </SecondBody>
            <SecondBody>
              Trism minimizes phone clutter and reduces the barriers to entry by
              leveraging phone numbers rather than account creation. Trism also
              uniquely targets iOS 14.5+ users in ways that are not currently
              possible on popular ad managers given the recent privacy changes
              introduced by Apple, while staying agnostic to all platforms and
              regions
            </SecondBody>
            <SecondBody>
              At its core, Trism allows control. Business owners will own their
              conversion data and control their media strategies while consumers
              will effectively "target" themselves, allowing them control over
              their intent to purchase.
            </SecondBody>
          </SecondHeaderDiv>
        </RowDiv>
      </ColumnDiv>
    </ContainerDiv>
  );
};
export default About;
