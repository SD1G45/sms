import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import SingleCardPage from "../../../components/SingleCardPage";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import { BUSINESS_USERS_QUERY } from "../../../page-queries/business/users";

// Styled imports
import {
  HeadingDiv,
  StyledCard,
  StyledHeading,
} from "../../../page-styles/business/team/styles";
import Table from "../../../components/Table";

const BusinessTeam = () => {
  const businessState = useBusinessState();

  const [getBusinessUsers, businessUsersQueryResult] =
    useLazyQuery(BUSINESS_USERS_QUERY);

  useEffect(() => {
    getBusinessUsers({
      variables: {
        businessId: businessState?.businessId,
      },
    });
  }, [getBusinessUsers, businessState]);

  const users =
    businessUsersQueryResult.data != undefined
      ? businessUsersQueryResult.data.usersForBusiness
      : [];

  if (users.length > 0) {
    console.log(users[0]);
  }

  const table_data: string[][] = [];
  // for (let i = 0; i < users.length; i++) {
  //   const curr = users[i];
  //   table_data.push([
  //     curr.firstName,

  //     curr.coupon.openCount,
  //     curr.coupon.redeemCount,
  //     `${Math.round((curr.coupon.openCount / (curr.sentCount || 1)) * 100)}%`,
  //     `${Math.round((curr.coupon.redeemCount / (curr.sentCount || 1)) * 100)}%`,
  //   ]);
  // }
  return (
    <SingleCardPage>
      <StyledCard>
        <HeadingDiv>
          <StyledHeading>{businessState?.name}'s team:</StyledHeading>
          {users.map((user: any, i: any) => (
            <div>{user.firstName}</div>
          ))}
        </HeadingDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default BusinessTeam;
