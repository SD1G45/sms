import React, { useState, useEffect } from "react";
import ErrorPopup from "../../../components/ErrorPopup";
import {
  Heading,
  StyledCard,
  StyledButton,
  SubHeading,
} from "../../../page-styles/business/join/styles";
import { useLazyQuery, useMutation } from "@apollo/client";
import SingleCardPage from "../../../components/SingleCardPage";
import { useRouter } from "next/router";
import { INVITE_ACCOUNT_MUTATION } from "../../../page-mutations/business/invite";
import { BUSINESS_INVITE_CODE_QUERY } from "../../../page-queries/business/join";
import { ACCEPT_INVITATION_MUTATION } from "../../../page-mutations/business/join";
import { useUserState } from "../../../context/UserContext";
import { useBusinessDispatch } from "../../../context/BusinessContext/BusinessContext";

const BusinessInvite = () => {
  const [errorState, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const code = router.query.code;
  const userState = useUserState();
  const businessDispatch = useBusinessDispatch();

  const [getBusinessInviteCodes, businessInviteCodeQuery] = useLazyQuery(
    BUSINESS_INVITE_CODE_QUERY
  );

  useEffect(() => {
    if (code != null) {
      getBusinessInviteCodes({
        variables: {
          value: code,
        },
      });
    }
  }, [code, getBusinessInviteCodes]);

  useEffect(() => {
    if (
      userState?.jid == null &&
      code != null &&
      businessInviteCodeQuery.data
    ) {
      router.push(
        `/login?redirect=/business/join&code=${code}&email=${businessInviteCodeQuery.data.businessInviteCode.email}`
      );
    }
  }, [userState?.jid, code, businessInviteCodeQuery.data]);

  const businessName =
    businessInviteCodeQuery.data !== undefined && userState?.jid
      ? businessInviteCodeQuery.data.businessInviteCode.business.name
      : "[error]";

  const businessId =
    businessInviteCodeQuery.data !== undefined && userState?.jid
      ? businessInviteCodeQuery.data.businessInviteCode.business.id
      : "";

  const businessLogoUrl =
    businessInviteCodeQuery.data !== undefined && userState?.jid
      ? businessInviteCodeQuery.data.businessInviteCode.business.logoUrl
      : "";

  const [acceptInvitationMutation] = useMutation(ACCEPT_INVITATION_MUTATION);

  const onAccept = async () => {
    setLoading(true);
    try {
      const { data, errors } = await acceptInvitationMutation({
        variables: {
          code,
        },
      });

      if (errors && errors.length > 0) {
        setError({ ...errorState, error: true, message: errors[0].message });
        setLoading(false);
        return;
      }

      businessDispatch({
        type: "setActiveBusiness",
        payload: {
          name: businessName,
          businessId,
          logoUrl: businessLogoUrl,
        },
      });

      router.push("/");

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError({ ...errorState, error: true, message: "error" });
    }
  };

  return (
    <SingleCardPage>
      <StyledCard>
        <Heading>Join {businessName}</Heading>
        <SubHeading>
          You have been invited to join {businessName}! Click the button below
          to join.
        </SubHeading>
        <ErrorPopup error={errorState.error} message={errorState.message} />
        <StyledButton disabled={loading} loading={loading} onClick={onAccept}>
          Join {businessName}
        </StyledButton>
      </StyledCard>
    </SingleCardPage>
  );
};

export default BusinessInvite;
