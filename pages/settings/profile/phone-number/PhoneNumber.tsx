import React from "react";
import { StyledCard } from "../../../../components/Card/styles";
import SingleCardPage from "../../../../components/SingleCardPage";
import { useBusinessState } from "../../../../context/BusinessContext/BusinessContext";
import { Heading } from "../../../../page-styles/settings/profile/styles";

const PhoneNumber = () => {
  const businessState = useBusinessState();

  return (
    <SingleCardPage>
      <StyledCard>
        <Heading>Phone number attached to {businessState?.name}:</Heading>
        {businessState?.phoneNumber}
      </StyledCard>
    </SingleCardPage>
  );
};

export default PhoneNumber;
