import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import SingleCardPage from "../../../components/SingleCardPage";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import { BUSINESS_USERS_QUERY } from "../../../page-queries/business/users";
import {
  HeadingDiv,
  StyledCard,
  StyledHeading,
} from "../../../page-styles/business/team/styles";

const BusinessTeam = () => {
  const businessState = useBusinessState();
  const [getBusinessUsers, businessUsersQueryResult] = useLazyQuery(BUSINESS_USERS_QUERY);
  useEffect(() => {
    getBusinessUsers({
      variables: {
        businessId: businessState?.businessId,
      }
    });
  }, [getBusinessUsers, businessState]);

  console.log(businessUsersQueryResult);
  

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
