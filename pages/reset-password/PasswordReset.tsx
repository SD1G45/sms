import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import SingleCardPage from "../../components/SingleCardPage";
import {
  NewPasswordInput,
  StyledCard,
  StyledHeader,
} from "../../page-styles/password-reset/styles";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import ErrorPopup from "../../components/ErrorPopup";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD_MUTATION } from "../../page-mutations/reset-password";
const PasswordReset = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [confirmOldPassword, setConfirmOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorState, setErrorState] = useState({ error: false, message: "" });

  useEffect(() => {
    setTimeout(
      () => setErrorState({ ...errorState, error: false, message: "" }),
      10000
    );
  });

  // TODO: Mutation
  //   const [updatePasswordMutation] = useMutation(RESET_PASSWORD_MUTATION);

  return (
    <SingleCardPage>
      <StyledCard>
        <StyledHeader>Reset Password</StyledHeader>
        <TextField
          label="Enter your old password"
          value={oldPassword}
          type="password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setOldPassword(event.target.value)
          }
        />
        <TextField
          label="Re-enter your old password"
          value={confirmOldPassword}
          type="password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmOldPassword(event.target.value)
          }
        />
        <ErrorPopup error={errorState.error} message={errorState.message} />
        <NewPasswordInput
          label="Enter your New password"
          value={newPassword}
          type="password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(event.target.value)
          }
        />
        <Button>Reset Password</Button>
      </StyledCard>
    </SingleCardPage>
  );
};

export default PasswordReset;
