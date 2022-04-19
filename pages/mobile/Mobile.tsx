import {
  StyledHeader,
  ContainerDiv,
  ColumnDiv,
  RowDiv,
  SecondRow,
  HeaderDiv,
  StyledSub,
  ImageDiv,
} from "../../page-styles/mobile/styles";
import Image from "next/image";
const Mobile = () => {
  return (
    <ContainerDiv>
      <ColumnDiv>
        <RowDiv>
          <ImageDiv>
            <Image
              src="/aboutusblack.png"
              width={433}
              height={100}
              alt="circle"
            />
          </ImageDiv>
          <HeaderDiv>
            <SecondRow>
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
              <StyledHeader>your app experience.</StyledHeader>
              <br />
              <br />
              <StyledSub>In the meantime, please log in on the PC</StyledSub>
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
