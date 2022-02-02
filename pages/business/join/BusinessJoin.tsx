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

const BusinessInvite = () => {
  const [email, setEmail] = useState("");
  const [errorState, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const code = router.query.code;

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

  const businessName =
    businessInviteCodeQuery.data !== undefined
      ? businessInviteCodeQuery.data.businessInviteCode.business.name
      : "[error]";

  const [acceptInvitationMutation] = useMutation(INVITE_ACCOUNT_MUTATION);

  const onAccept = async () => {
    setLoading(true);
    try {
      const { data, errors } = await acceptInvitationMutation();

      if (errors && errors.length > 0) {
        setError({ ...errorState, error: true, message: errors[0].message });
        setLoading(false);
        return;
      }

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
