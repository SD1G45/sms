import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import SingleCardPage from "../../components/SingleCardPage";
import {
  BackButton,
  HeaderDiv,
  NewPasswordInput,
  StyledButton,
  StyledCard,
  StyledHeader,
} from "../../page-styles/password-reset/styles";
import {
  CardDescription,
  CardHeading,
  SetupLaterButton,
} from "../../page-styles/coupons/create/styles";
import Image from "next/image";
import { useRouter } from "next/router";
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
  const [updatePassword, setUpdatePassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
   const [updatePasswordMutation] = useMutation(RESET_PASSWORD_MUTATION, {
     errorPolicy: "all",
   });
  const router = useRouter();

  useEffect(() => {
    setTimeout(
      () => setErrorState({ ...errorState, error: false, message: "" }),
      10000
    );
  });

  const Results = () => (
    <StyledCard>
      <Image src="/check.png" width={100} height={100} />
      <CardHeading>Password update complete</CardHeading>
      <CardDescription>
        Succesfully changed password
      </CardDescription>

      <SetupLaterButton onClick={() => router.push("/dashboard")}>
        Go Home
      </SetupLaterButton>
    </StyledCard>
  );

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
     setSuccess(true);
   } catch (error) {
     setErrorState({
       ...errorState,
       error: true,
       message: "Something went wrong, please try again later.",
     });
   }
   };

  const InitialDisplay = () => {
    return (
      <>
        <StyledCard>
          <HeaderDiv>
            <StyledHeader>Reset Password</StyledHeader>
          </HeaderDiv>
          <Button onClick={() => setUpdatePassword(true)}>
            I know my password
          </Button>
          <Button onClick={() => setForgotPassword(true)}>
            I forgot my password
          </Button>
        </StyledCard>
      </>
    );
  };

  const ForgotPasswordDisplay = () => {
    return (
      <>
        <StyledCard>
          <HeaderDiv>
            {" "}
            <StyledHeader>Reset Password</StyledHeader>
          </HeaderDiv>
          <TextField
            label="Enter the email associated with your password"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <StyledButton disabled={loading} loading={loading}>
            Send Email
          </StyledButton>
          <BackButton onClick={() => setForgotPassword(false)}>Back</BackButton>
        </StyledCard>
      </>
    );
  };

  const UpdatePasswordDisplay = () => {
    return (
      <>
        <StyledCard>
          <HeaderDiv>
            <StyledHeader>Reset Password</StyledHeader>
          </HeaderDiv>
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
          <Button onClick={() => onReset()} disabled={loading} loading={loading}>Reset Password</Button>
          <BackButton onClick={() => setUpdatePassword(false)}>back</BackButton>
        </StyledCard>
      </>
    );
  };

  if (success) {
    return (
      <Results />
    );
  }

  return (
    <SingleCardPage>
      {!updatePassword && !forgotPassword && <InitialDisplay />}
      {updatePassword && !forgotPassword && <UpdatePasswordDisplay />}
      {!updatePassword && forgotPassword && <ForgotPasswordDisplay />}
    </SingleCardPage>
  );
};

export default PasswordReset;
