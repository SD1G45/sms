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
  LinkDiv,
  StyledLink,
} from "../../page-styles/settings/styles";
import {
  FcQuestions,
  FcDataEncryption,
  FcMoneyTransfer,
  FcConferenceCall,
  FcSupport,
} from "react-icons/fc";
import Link from "next/link";
import newRouteWithQueries from "../../helpers/newRouteWithQueries";
import { useRouter } from "next/router";

const Settings = () => {
  const router = useRouter();
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

            <LinkDiv>
              <Link href={newRouteWithQueries("/profile", router)}>
                <StyledLink>Account Details</StyledLink>
              </Link>
            </LinkDiv>
            <LinkDiv>
              <Link href={newRouteWithQueries("/reset-password", router)}>
                <StyledLink>Password Reset</StyledLink>
              </Link>
            </LinkDiv>
            <LinkDiv>
              <Link href={newRouteWithQueries("/account-phone-number", router)}>
                <StyledLink>Phone Number</StyledLink>
              </Link>
            </LinkDiv>
          </Box>
          <Box>
            <BoxHeading>
              <FcMoneyTransfer />
              Billing
            </BoxHeading>
            <Description>Change your billing information </Description>

            <LinkDiv>
              <Link href={newRouteWithQueries("/billing/subscription", router)}>
                <StyledLink>Subscription</StyledLink>
              </Link>
            </LinkDiv>
            <LinkDiv>
              <Link href={newRouteWithQueries("/billing/payment-info", router)}>
                <StyledLink>Payment Information</StyledLink>
              </Link>
            </LinkDiv>
            <LinkDiv>
              <Link href={newRouteWithQueries("/billing/history", router)}>
                <StyledLink>Billing History</StyledLink>
              </Link>
            </LinkDiv>
          </Box>
        </GridContainer>
        <GridContainer>
          <Box>
            <BoxHeading>
              <FcConferenceCall />
              Team
            </BoxHeading>
            <Description>Manage your team members </Description>

            <LinkDiv>
              <Link href={newRouteWithQueries("/business/team", router)}>
                <StyledLink>Manage Roles</StyledLink>
              </Link>
            </LinkDiv>
            <LinkDiv>
              <Link href={newRouteWithQueries("/business/invite", router)}>
                <StyledLink>Invite a Team Member</StyledLink>
              </Link>
            </LinkDiv>
          </Box>
          <Box>
            <BoxHeading>
              <FcQuestions />
              Help
            </BoxHeading>
            <Description>Contact Trism </Description>

            <LinkDiv>
              <Link href={newRouteWithQueries("/contact-us", router)}>
                <StyledLink>Contact Us</StyledLink>
              </Link>
            </LinkDiv>
            <LinkDiv>
              <Link href={newRouteWithQueries("/about", router)}>
                <StyledLink>About us</StyledLink>
              </Link>
            </LinkDiv>
          </Box>
        </GridContainer>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Settings;
