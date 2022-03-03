import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { StyledCard } from "../../../../components/Card/styles";
import SingleCardPage from "../../../../components/SingleCardPage";
import { useBusinessState } from "../../../../context/BusinessContext/BusinessContext";
import newRouteWithQueries from "../../../../helpers/newRouteWithQueries";
import {
  Heading,
  StyledLink,
  PhoneNumberDiv,
  PhoneNumberLinkDiv,
} from "../../../../page-styles/settings/profile/styles";
import { FcPhone } from "react-icons/fc";
const PhoneNumber = () => {
  const businessState = useBusinessState();
  const router = useRouter();
  return (
    <SingleCardPage>
      <StyledCard>
        <Heading>Phone number attached to {businessState?.name}:</Heading>
        <PhoneNumberDiv>
          <FcPhone />
          {businessState?.phoneNumber}
        </PhoneNumberDiv>
        <PhoneNumberLinkDiv>
          <Link href={newRouteWithQueries("/settings", router)}>
            <StyledLink>Back to settings</StyledLink>
          </Link>
          <Link href={newRouteWithQueries("/settings", router)}>
            <StyledLink>Back to settings</StyledLink>
          </Link>
        </PhoneNumberLinkDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default PhoneNumber;
