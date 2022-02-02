import React, { useState, useEffect } from "react";
import Checkbox from "../../../components/Checkbox";
import ErrorPopup from "../../../components/ErrorPopup";
import Link from "next/link";
import {
  Heading,
  StyledCard,
  PasswordTextField,
  EmailTextField,
  StyledButton,
  StyledLink,
  LinkDiv,
  SubHeading,
} from "../../../page-styles/business/invite/styles";
import { useMutation } from "@apollo/client";
import { useUserDispatch } from "../../../context/UserContext/UserContext";
import SingleCardPage from "../../../components/SingleCardPage";
import { useRouter } from "next/router";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import { INVITE_ACCOUNT_MUTATION } from "../../../page-mutations/business/invite";

const BusinessInvite = () => {
  const [email, setEmail] = useState("");
  const [errorState, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const businessState = useBusinessState();
  const router = useRouter();

  const [inviteAccountMutation] = useMutation(INVITE_ACCOUNT_MUTATION);

  const onInvite = async () => {
    if (email.length === 0) {
      setError({
        ...errorState,
        error: true,
        message: "Missing email",
      });
      return;
    }
    setLoading(true);
    try {
      const { data, errors } = await inviteAccountMutation({
        variables: {
          email,
        },
      });

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
        <Heading>Invite account {businessState?.name}</Heading>
        <SubHeading>
          Enter the email you used to create your account. A URL will be sent to
          your email to reset your password.
        </SubHeading>
        <EmailTextField
          label="Email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <ErrorPopup error={errorState.error} message={errorState.message} />
        <StyledButton disabled={loading} loading={loading} onClick={onInvite}>
          Send invite
        </StyledButton>
      </StyledCard>
    </SingleCardPage>
  );
};

export default BusinessInvite;
