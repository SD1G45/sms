import React from "react";
import { StyledCard } from "../../components/Card/styles";
import SingleCardPage from "../../components/SingleCardPage";
import {
  Box,
  BoxHeading,
  GridContainer,
  CardHeading,
  Description,
  StyledButton,
} from "../../page-styles/settings/styles";
import {
  FcQuestions,
  FcDataEncryption,
  FcMoneyTransfer,
  FcConferenceCall,
  FcSupport,
} from "react-icons/fc";

const Settings = () => {
  return (
    <SingleCardPage>
      <StyledCard>
        <CardHeading>
          <FcSupport /> Settings
        </CardHeading>
        <GridContainer>
          <Box>
            <BoxHeading>
              <FcDataEncryption />
              Profile
            </BoxHeading>
            <Description>Change your basic information </Description>
            <StyledButton>Name and email</StyledButton>
            <StyledButton>Phone number</StyledButton>
            <StyledButton>Password reset</StyledButton>
          </Box>
          <Box>
            <BoxHeading>
              <FcMoneyTransfer />
              Billing
            </BoxHeading>
            <Description>Change your billing information </Description>
            <StyledButton>Subscription</StyledButton>
            <StyledButton>Card information</StyledButton>
            <StyledButton>Payment history</StyledButton>
          </Box>
        </GridContainer>
        <GridContainer>
          <Box>
            <BoxHeading>
              <FcConferenceCall />
              Team
            </BoxHeading>
            <Description>Manage your team members </Description>
            <StyledButton>Manage roles </StyledButton>
            <StyledButton>Invite a team member</StyledButton>
          </Box>
          <Box>
            <BoxHeading>
              <FcQuestions />
              Help
            </BoxHeading>
            <Description>Contact Trism </Description>
            <StyledButton>Email Trism </StyledButton>
            <StyledButton>Text Trism </StyledButton>
          </Box>
        </GridContainer>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Settings;
