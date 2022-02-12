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
import { useUserState } from "../../context/UserContext";

const Welcome = () => {
  const userState = useUserState();
  return (
    <SingleCardPage>
      <StyledCard>
        <Heading>Welcome to trism, [user]! </Heading>
        <SetupMessage>
          Let&apos;s get you set up with your business...
        </SetupMessage>
        <SetupQuestion>
          Would you like to create a new business account or join an existing
          one?
        </SetupQuestion>
        <Link href="/business/create" passHref>
          <StyledButton>Create new business</StyledButton>
        </Link>
        <Link href="/business/join" passHref>
          <StyledButton>Join existing business</StyledButton>
        </Link>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Welcome;
