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
import { resetPasswordMutation } from "../../graphql/schema/mutations";
const PasswordReset = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [confirmOldPassword, setConfirmOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorState, setErrorState] = useState({ error: false, message: "" });

  const [updatePasswordMutation] = useMutation(RESET_PASSWORD_MUTATION, {
    errorPolicy: "all",
  });

  useEffect(() => {
    setTimeout(
      () => setErrorState({ ...errorState, error: false, message: "" }),
      10000
    );
  });

  const onReset = async () => {
    if (
      oldPassword.length === 0 ||
      confirmOldPassword.length === 0 ||
      newPassword.length === 0
    ) {
      setErrorState({
        ...errorState,
        error: true,
        message: "All field must be filled in",
      });
      return;
    }

    if (oldPassword != confirmOldPassword) {
      setErrorState({
        ...errorState,
        error: true,
        message: "Passwords do not match",
      });
      return;
    }
    try {
      const { data, errors } = await updatePasswordMutation({
        variables: {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
      });

      if (errors && errors.length > 0) {
        setErrorState({
          ...errorState,
          error: true,
          message: errors[0].message,
        });
        return;
      }
    } catch (error) {
      setErrorState({
        ...errorState,
        error: true,
        message: "Something went wrong, please try again later.",
      });
    }
  };

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
        <Button onClick={() => onReset()}>Reset Password</Button>
      </StyledCard>
    </SingleCardPage>
  );
};

export default PasswordReset;
