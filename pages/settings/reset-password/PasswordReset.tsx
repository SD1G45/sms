import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import SingleCardPage from "../../../components/SingleCardPage";
import {
  BackButton,
  HeaderDiv,
  NewPasswordInput,
  StyledButton,
  StyledCard,
  StyledHeader,
  StyledLink,
} from "../../../page-styles/password-reset/styles";
import {
  CardDescription,
  CardHeading,
  SetupLaterButton,
} from "../../../page-styles/coupons/create/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import TextField from "../../../components/TextField";
import Button from "../../../components/Button";
import ErrorPopup from "../../../components/ErrorPopup";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD_MUTATION } from "../../../page-mutations/reset-password";
import Link from "next/link";
import newRouteWithQueries from "../../../helpers/newRouteWithQueries";
import { FcDataEncryption } from "react-icons/fc";

interface ForgotPasswordProps {
  email: string;
  onEmailChange: (value: string) => void;
  setForgotPassword: (value: boolean) => void;
}

const ForgotPasswordDisplay: React.FC<ForgotPasswordProps> = ({
  email,
  onEmailChange,
  setForgotPassword,
}) => {
  const [loading, setLoading] = useState(false);

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
            onEmailChange(event.target.value)
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

interface InitialDisplayProps {
  setUpdatePassword: (value: boolean) => void;
  setForgotPassword: (value: boolean) => void;
}

const InitialDisplay: React.FC<InitialDisplayProps> = ({
  setUpdatePassword,
  setForgotPassword,
}) => {
  const router = useRouter();
  return (
    <>
      <StyledCard>
        <HeaderDiv>
          <StyledHeader>
            <FcDataEncryption />
            Reset Password
          </StyledHeader>
        </HeaderDiv>
        <StyledButton onClick={() => setUpdatePassword(true)}>
          I know my password
        </StyledButton>
        <StyledButton onClick={() => setForgotPassword(true)}>
          I forgot my password
        </StyledButton>
        <Link href={newRouteWithQueries("/settings", router)}>
          <StyledLink>Back to settings</StyledLink>
        </Link>
      </StyledCard>
    </>
  );
};

interface UpdatePasswordProps {
  setUpdatePassword: (value: boolean) => void;
  onOldPasswordChange: (value: string) => void;
  oldPassword: string;
  onNewPasswordChange: (value: string) => void;
  newPassword: string;
}

const UpdatePasswordDisplay: React.FC<UpdatePasswordProps> = ({
  setUpdatePassword,
  onOldPasswordChange,
  onNewPasswordChange,

  oldPassword,
  newPassword,
}) => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [confirmOldPassword, setConfirmOldPassword] = useState("");
  const [errorState, setErrorState] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [updatePasswordMutation] = useMutation(RESET_PASSWORD_MUTATION, {
    errorPolicy: "all",
  });

  const Results = () => (
    <StyledCard>
      <Image src="/check.png" width={100} height={100} />
      <CardHeading>Password update complete</CardHeading>
      <CardDescription>Succesfully changed password</CardDescription>

      <SetupLaterButton onClick={() => router.push("/dashboard")}>
        Go Home
      </SetupLaterButton>
    </StyledCard>
  );

  if (success) {
    return <Results />;
  }

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
            onOldPasswordChange(event.target.value)
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
            onNewPasswordChange(event.target.value)
          }
        />
        <Button onClick={() => onReset()} disabled={loading} loading={loading}>
          Reset Password
        </Button>
        <BackButton onClick={() => setUpdatePassword(false)}>back</BackButton>
      </StyledCard>
    </>
  );
};

const PasswordReset = () => {
  const [oldPassword, setOldPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [errorState, setErrorState] = useState({ error: false, message: "" });
  const [updatePassword, setUpdatePassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(
      () => setErrorState({ ...errorState, error: false, message: "" }),
      10000
    );
  });

  return (
    <SingleCardPage>
      {!updatePassword && !forgotPassword && (
        <InitialDisplay
          setForgotPassword={(forgotPassword) =>
            setForgotPassword(forgotPassword)
          }
          setUpdatePassword={(updatePassword) =>
            setUpdatePassword(updatePassword)
          }
        />
      )}
      {updatePassword && !forgotPassword && (
        <UpdatePasswordDisplay
          oldPassword={oldPassword}
          onOldPasswordChange={(value) => setOldPassword(value)}
          newPassword={newPassword}
          onNewPasswordChange={(value) => setNewPassword(value)}
          setUpdatePassword={(updatePassword) =>
            setUpdatePassword(updatePassword)
          }
        />
      )}
      {!updatePassword && forgotPassword && (
        <ForgotPasswordDisplay
          email={email}
          onEmailChange={(value) => setEmail(value)}
          setForgotPassword={(forgotPassword) =>
            setForgotPassword(forgotPassword)
          }
        />
      )}
    </SingleCardPage>
  );
};

export default PasswordReset;
