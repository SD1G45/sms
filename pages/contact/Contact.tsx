import Link from "next/link";
import router from "next/router";
import React from "react";

import SingleCardPage from "../../components/SingleCardPage";
import {
  BackDiv,
  HeaderDiv,
  LinkContainer,
  LinkDiv,
  StyledCard,
  StyledHeading,
  StyledLink,
} from "../../page-styles/contact/styles";
import { FcAddressBook, FcFeedback, FcPhone, FcIdea } from "react-icons/fc";
import newRouteWithQueries from "../../helpers/newRouteWithQueries";
const Contact = () => {
  return (
    <SingleCardPage>
      <StyledCard>
        <HeaderDiv>
          <StyledHeading>
            <FcAddressBook />
            Contact Us
          </StyledHeading>
        </HeaderDiv>
        Need help? Have a suggestion? Just want to say hi? We'd love to hear
        from you.
        <LinkContainer>
          <LinkDiv>
            <FcFeedback />
            <Link href="mailto:contact@trism.co">
              <StyledLink>Email us</StyledLink>
            </Link>
          </LinkDiv>
          <LinkDiv>
            <FcIdea />
            <Link href="contact/suggestion">
              <StyledLink>Leave a Suggestion</StyledLink>
            </Link>
          </LinkDiv>
          <LinkDiv>
            <FcPhone />
            <Link href="#">
              <StyledLink>Call us</StyledLink>
            </Link>
          </LinkDiv>
        </LinkContainer>
        <BackDiv>
          <Link href={newRouteWithQueries("/settings", router)}>
            <StyledLink>Back to settings</StyledLink>
          </Link>
        </BackDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Contact;
