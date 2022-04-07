import React, { useEffect, useState } from "react";

import SingleCardPage from "../../../components/SingleCardPage";

import {
  Heading,
  HeaderDiv,
  StyledCard,
} from "../../../page-styles/settings/profile/styles";

import { FcCheckmark, FcMoneyTransfer } from "react-icons/fc";
import { useRouter } from "next/router";
import newRouteWithQueries from "../../../helpers/newRouteWithQueries";
import Link from "next/link";
import { StyledLink } from "../../../page-styles/settings/profile/styles";

const Subscription = () => {
  const router = useRouter();

  return (
    <SingleCardPage>
      <StyledCard>
        <HeaderDiv>
          <Heading>
            <FcMoneyTransfer />
            View your subscription
          </Heading>
        </HeaderDiv>
        <p>
          Subscription: Active <FcCheckmark />
        </p>

        <p>Billing Schedule: Monthly</p>
        <Link href={newRouteWithQueries("/settings", router)}>
          <StyledLink>Back to settings</StyledLink>
        </Link>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Subscription;
