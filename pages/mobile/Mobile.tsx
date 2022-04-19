import {
  StyledHeader,
  ContainerDiv,
  ColumnDiv,
  RowDiv,
  SecondRow,
  HeaderDiv,
  StyledSub,
  ImageDiv,
  PyramidDiv,
} from "../../page-styles/mobile/styles";
import Image from "next/image";
import { Parallax, useParallax } from "react-scroll-parallax";
const Mobile = () => {
  const parallax = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: [-40, 4],
  });
  return (
    <ContainerDiv>
      <ColumnDiv>
        <RowDiv>
          <ImageDiv>
            <Parallax speed={10}>
              <Image
                src="/aboutusblack.png"
                width={433}
                height={100}
                alt="circle"
              />
            </Parallax>
          </ImageDiv>
          <Parallax speed={-20}>
            <PyramidDiv>
              <Image
                src="/icons/pyramid-transparent.png"
                width={100}
                height={100}
                alt="circle"
              />{" "}
            </PyramidDiv>
          </Parallax>
          <HeaderDiv>
            <SecondRow>
              <div ref={parallax.ref}>
                <StyledHeader>Sorry we're not ready</StyledHeader>

                <StyledHeader>
                  for you yet.
                  <span
                    style={{ "font-size": 25, marginLeft: 4, marginRight: 5 }}
                  >
                    {" "}
                    &#128553;
                  </span>{" "}
                  We're{" "}
                </StyledHeader>
                <StyledHeader>working on improving</StyledHeader>
                <StyledHeader>your mobile experience.</StyledHeader>
              </div>
              <br />
              <br />
              <StyledSub>
                In the meantime, please log in on a computer
              </StyledSub>
              <StyledSub>to fully experience the website!</StyledSub>
              {/* <LineDiv></LineDiv> */}
            </SecondRow>
            {/* <StyledBody></StyledBody>
            <StyledBody></StyledBody>
            <StyledBody></StyledBody> */}
          </HeaderDiv>
        </RowDiv>
      </ColumnDiv>
    </ContainerDiv>
  );
};
export default Mobile;
