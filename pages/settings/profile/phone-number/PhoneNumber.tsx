import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import SingleCardPage from "../../../../components/SingleCardPage";
import { useBusinessState } from "../../../../context/BusinessContext/BusinessContext";
import newRouteWithQueries from "../../../../helpers/newRouteWithQueries";
import {
  Heading,
  StyledLink,
  PhoneNumberDiv,
  PhoneNumberLinkDiv,
  StyledCard,
  TextDiv,
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
        <TextDiv>
          This is the phone number your business uses to send and receive texts
          through Trism's SMS services.
        </TextDiv>
        <PhoneNumberLinkDiv>
          <Link href={newRouteWithQueries("/settings", router)}>
            <StyledLink>Back to settings</StyledLink>
          </Link>
          <Link
            href={newRouteWithQueries(
              "/settings/profile/phone-number/new",
              router
            )}
          >
            <StyledLink>Get a new Phone Number</StyledLink>
          </Link>
        </PhoneNumberLinkDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default PhoneNumber;
