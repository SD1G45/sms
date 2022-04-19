import React from "react";
import Card from "../../components/Card";
import SingleCardPage from "../../components/SingleCardPage";
import { Box, BoxHeading, CardHeading, Description, GridContainer } from "../../page-styles/settings/styles";
import { FaQuestionCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { StyledButton } from "../../components/Button/styles";
import getRootUrl from "../../config/rootUrl";
import { BlueBoxHeading, ImageContainer, StyledBox } from "../../page-styles/help/styles";
import Image from "next/image";

const Help = () => {
  const router = useRouter();
  const rootUrl = getRootUrl();

  return (
    <SingleCardPage>
      <Card>
        <CardHeading>
          <FaQuestionCircle /> Help
        </CardHeading>
        <GridContainer>
          <StyledBox>
            <BoxHeading>
              Step 1: Create a 
              <BlueBoxHeading>
                &nbsp;Customer List
              </BlueBoxHeading>
            </BoxHeading>
            <Description>
              Where you will find your customers
            </Description>
            <ImageContainer>
              <Image src={"/CustomerList.gif"} width={"300"} height={"300"} />
            </ImageContainer>
            <StyledButton onClick={() => { router.push(rootUrl + "customers/create")}}>
              Create Customer List
            </StyledButton>
          </StyledBox>
          <StyledBox>
            <BoxHeading>
              Step 2: Create a 
              <BlueBoxHeading>
                &nbsp;Coupon
              </BlueBoxHeading>
            </BoxHeading>
            <Description>
              Where you create your deals
            </Description>
            <ImageContainer>
              <Image src={"/coupons.gif"} width={"300"} height={"300"} />
            </ImageContainer>
            <StyledButton onClick={() => { router.push(rootUrl + "coupons/create")}}>
              Create Your First Coupon
            </StyledButton>
          </StyledBox>
          <StyledBox>
            <BoxHeading>
              Step 3: Create a 
              <BlueBoxHeading>
               &nbsp;Keyword
              </BlueBoxHeading>
            </BoxHeading>
            <Description>
              Where customers redeem coupons
            </Description>
            <ImageContainer>
              <Image src={"/keywords.gif"} width={"300"} height={"300"} />
            </ImageContainer>
            <StyledButton onClick={() => { router.push(rootUrl + "keywords/create")}}>
              Create A Keyword
            </StyledButton>
          </StyledBox>
          <StyledBox>
            <BoxHeading>
              Step 4 (Optional): Create a 
              <BlueBoxHeading>
                &nbsp;Campaign
              </BlueBoxHeading>
            </BoxHeading>
            <Description>
              Follow up with customers
            </Description>
            <ImageContainer>
              <Image src={"/campaigns.gif"} width={"300"} height={"300"} />
            </ImageContainer>
            <StyledButton onClick={() => { router.push(rootUrl + "campaigns/create")}}>
              Create Your Campaign
            </StyledButton>
          </StyledBox>
        </GridContainer>
      </Card>
    </SingleCardPage>
  );
};

export default Help;
