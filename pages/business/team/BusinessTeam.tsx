import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import SingleCardPage from "../../../components/SingleCardPage";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import { BUSINESS_USERS_QUERY } from "../../../page-queries/business/users";

// Styled imports
import {
  DataContainer,
  Divider,
  HeadingDiv,
  StyledLink,
  NameItem,
  RoleItem,
  StyledCard,
  StyledHeading,
  BottomLinkDiv,
} from "../../../page-styles/business/team/styles";
import { RowDiv } from "../../../page-styles/business/team/styles";
import { FcBusinessman, FcConferenceCall, FcReading } from "react-icons/fc";
import Link from "next/link";
import newRouteWithQueries from "../../../helpers/newRouteWithQueries";
import { useRouter } from "next/router";

const BusinessTeam = () => {
  const router = useRouter();
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

  // Users stored as { user{id,firstName,lastName}, role}
  const users =
    businessUsersQueryResult.data != undefined
      ? businessUsersQueryResult.data.usersForBusiness
      : [];

  return (
    <SingleCardPage>
      <StyledCard>
        <HeadingDiv>
          <StyledHeading>
            <FcConferenceCall />
            {businessState?.name}'s team:
          </StyledHeading>
        </HeadingDiv>
        <DataContainer>
          {users.map((user: any, i: any) => (
            <>
              <RowDiv>
                <NameItem>
                  {user.user.firstName} {user.user.lastName}
                </NameItem>

                <RoleItem>
                  {user.role == "OWNER" ? <FcBusinessman /> : <FcReading />}
                  {user.role}
                  <StyledLink>edit</StyledLink>
                </RoleItem>
              </RowDiv>
              <Divider></Divider>
            </>
          ))}
        </DataContainer>
        <BottomLinkDiv>
          <Link href={newRouteWithQueries("/settings", router)}>
            <StyledLink>Back to settings</StyledLink>
          </Link>
          <Link href={newRouteWithQueries("/business/invite", router)}>
            <StyledLink>Invite someone to your Team</StyledLink>
          </Link>
        </BottomLinkDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default BusinessTeam;
