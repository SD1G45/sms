import React, { useEffect } from "react";
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
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import router from "next/router";
import Cookies from "js-cookie";

const Welcome = () => {
  const userState = useUserState();
  const businessState = useBusinessState();
  useEffect(() => {
    if (businessState?.businessId) {
      router.push("/");
    }
  }, [businessState]);

  return (
    <SingleCardPage>
      <StyledCard>
        <Heading>Welcome to trism, {userState?.firstName}! </Heading>
        <SetupMessage>
          Let&apos;s get you set up with your business...
        </SetupMessage>
        <SetupQuestion>
          Would you like to create a new business account or join an existing
          one?
        </SetupQuestion>
        <Link href="/business/create" passHref>
          <StyledButton id="create">Create new business</StyledButton>
        </Link>
        <Link href="/business/join" passHref>
          <StyledButton id="join">Join existing business</StyledButton>
        </Link>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Welcome;
