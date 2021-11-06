import React from "react";
import SingleCardPage from "../../components/SingleCardPage";
import {
  Heading,
  StyledCard,
  StyledButton,
  SetupMessage,
  SetupQuestion,
} from "../../page-styles/welcome/styles";
import Link from "next/link";

const Welcome = () => {
  return (
    <SingleCardPage>
      <StyledCard>
        <Heading>Welcome to [COMPANY_NAME], Brennen! </Heading>
        <SetupMessage>
          Let&apos;s get you set up with your business...
        </SetupMessage>
        <SetupQuestion>
          Would you like to create a new business account or join an existing
          one?
        </SetupQuestion>
        <Link href="/create-business" passHref>
          <StyledButton>Create new business</StyledButton>
        </Link>
        <Link href="/join-business" passHref>
          <StyledButton>Join existing business</StyledButton>
        </Link>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Welcome;
