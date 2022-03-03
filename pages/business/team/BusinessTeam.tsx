import React from "react";
import SingleCardPage from "../../../components/SingleCardPage";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import {
  HeadingDiv,
  StyledCard,
  StyledHeading,
} from "../../../page-styles/business/team/styles";

const BusinessTeam = () => {
  const businessState = useBusinessState();

  return (
    <SingleCardPage>
      <StyledCard>
        <HeadingDiv>
          <StyledHeading>{businessState?.name}'s team:</StyledHeading>
        </HeadingDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default BusinessTeam;
