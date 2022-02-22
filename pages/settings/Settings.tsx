import React from "react";
import { StyledCard } from "../../components/Card/styles";
import SingleCardPage from "../../components/SingleCardPage";
import {
  Box,
  BoxHeading,
  GridContainer,
} from "../../page-styles/settings/styles";

const Settings = () => {
  return (
    <SingleCardPage>
      <StyledCard>
        <GridContainer>
          <Box>
            <BoxHeading>Profile</BoxHeading>
          </Box>
          <Box>
            <BoxHeading>Billing</BoxHeading>
          </Box>
        </GridContainer>
        <GridContainer>
          <Box>
            <BoxHeading>Business settings</BoxHeading>
          </Box>
          <Box>
            <BoxHeading>Team</BoxHeading>
          </Box>
        </GridContainer>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Settings;
