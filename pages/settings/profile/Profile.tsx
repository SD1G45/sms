import React, { useEffect, useState } from "react";
import { StyledCard } from "../../../components/Card/styles";
import SingleCardPage from "../../../components/SingleCardPage";
import TextField from "../../../components/TextField";
import {
  Heading,
  BackButton,
  HeaderDiv,
  StyledButton,
  SubHeading,
  StyledTextField,
  SuccessDiv,
} from "../../../page-styles/settings/profile/styles";

import { FcDataEncryption } from "react-icons/fc";
import { useRouter } from "next/router";
import newRouteWithQueries from "../../../helpers/newRouteWithQueries";
import Link from "next/link";
import { StyledLink } from "../../../page-styles/settings/profile/styles";
import { FcPortraitMode } from "react-icons/fc";
import { useMutation } from "@apollo/client";
import { EDIT_USERNAME_MUTATION } from "../../../page-mutations/users";
import {
  useUserDispatch,
  useUserState,
} from "../../../context/UserContext/UserContext";

import Image from "next/image";
import {
  CardDescription,
  CardHeading,
  ConnectButton,
  SetupLaterButton,
} from "../../../page-styles/coupons/create/styles";
interface InitialDisplayProps {
  setUpdateEmail: (value: boolean) => void;
  setUpdateDisplayName: (value: boolean) => void;
}

const InitialDisplay: React.FC<InitialDisplayProps> = ({
  setUpdateEmail,
  setUpdateDisplayName,
}) => {
  const router = useRouter();

  return (
    <>
      <StyledCard>
        <HeaderDiv>
          <Heading>
            <FcDataEncryption />
            What would you like to do?
          </Heading>
        </HeaderDiv>
        <StyledButton onClick={() => setUpdateEmail(true)}>
          Change my Email
        </StyledButton>
        <StyledButton onClick={() => setUpdateDisplayName(true)}>
          Change my Profile Information
        </StyledButton>
        <Link href={newRouteWithQueries("/settings", router)}>
          <StyledLink>Back to settings</StyledLink>
        </Link>
      </StyledCard>
    </>
  );
};

interface updateDisplayNameProps {
  firstName: string;
  lastName: string;
  password: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  setUpdateDisplayName: (value: boolean) => void;
}

const UpdateDisplayName: React.FC<updateDisplayNameProps> = ({
  firstName,
  lastName,
  password,
  onFirstNameChange,
  onLastNameChange,
  onPasswordChange,
  setUpdateDisplayName,
}) => {
  const [loading, setLoading] = useState(false);
  const [editUserNameMutation] = useMutation(EDIT_USERNAME_MUTATION, {
    errorPolicy: "all",
  });

  const userState = useUserState();

  const [errorState, setErrorState] = useState({ error: false, message: "" });
  const router = useRouter();
  const userDispatch = useUserDispatch();
  const [success, setSuccess] = useState(false);

  const SuccessPopUp = () => (
    <StyledCard>
      <Image src="/check.png" width={100} height={100} />
      <CardHeading>Got it!</CardHeading>
      <CardDescription>Your name has been succesfully updated!</CardDescription>
      <div>
        <ConnectButton onClick={() => router.push("/settings")}>
          Back to settings
        </ConnectButton>
      </div>
    </StyledCard>
  );

  const doEditName = async () => {
    if (firstName.length == 0 || lastName.length == 0) {
      setErrorState({
        ...errorState,
        error: true,
        message: "Both fields must be filled in",
      });
      return;
    }

    if (password.length == 0) {
      setErrorState({
        ...errorState,
        error: true,
        message: "Please enter the password associated with your account",
      });
    }

    try {
      const { data, errors } = await editUserNameMutation({
        variables: {
          id: userState?.userId,
          firstName,
          lastName,
          password,
        },
      });

      if (errors && errors.length > 0) {
        setErrorState({ ...errorState, error: true, message: "error" });
      }

      userDispatch({
        type: "login",
        payload: {
          jid: userState?.jid,
          userId: userState?.userId,
          firstName: firstName,
        },
      });
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SuccessDiv>{success && <SuccessPopUp />}</SuccessDiv>

      <StyledCard>
        <HeaderDiv>
          <Heading>
            <FcPortraitMode />
            Change your Display Name
          </Heading>
          <SubHeading>
            Enter the display name you would like attached to your profile.
          </SubHeading>
        </HeaderDiv>
        <StyledTextField
          label="First Name"
          value={firstName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onFirstNameChange(event.target.value)
          }
        />
        <StyledTextField
          label="Last Name"
          value={lastName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onLastNameChange(event.target.value)
          }
        />
        <StyledTextField
          label="Password"
          type="password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onPasswordChange(event.target.value)
          }
        />
        <StyledButton
          disabled={loading}
          loading={loading}
          onClick={() => {
            console.log("click");
            doEditName();
          }}
        >
          Change Name
        </StyledButton>
        <BackButton onClick={() => setUpdateDisplayName(false)}>
          Back
        </BackButton>
      </StyledCard>
    </>
  );
};

interface UpdateEmailProps {
  email: string;
  onEmailChange: (value: string) => void;
  setUpdateEmail: (value: boolean) => void;
}

const UpdateEmailDisplay: React.FC<UpdateEmailProps> = ({
  email,
  onEmailChange,
  setUpdateEmail,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <StyledCard>
        <HeaderDiv>
          {" "}
          <Heading>Update Email</Heading>
        </HeaderDiv>
        <TextField
          label="Enter the current email associated with your account"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onEmailChange(event.target.value)
          }
        />
        <StyledButton disabled={loading} loading={loading}>
          Send Email
        </StyledButton>
        <BackButton onClick={() => setUpdateEmail(false)}>Back</BackButton>
      </StyledCard>
    </>
  );
};

const Profile = () => {
  const [errorState, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [updateEmail, setUpdateEmail] = useState(false);
  const [updateDisplayName, setUpdateDisplayName] = useState(false);

  useEffect(() => {
    setTimeout(
      () => setError({ ...errorState, error: false, message: "" }),
      10000
    );
  });

  return (
    <SingleCardPage>
      {" "}
      {!updateDisplayName && !updateEmail && (
        <InitialDisplay
          setUpdateDisplayName={(updateDisplayName) => {
            setUpdateDisplayName(updateDisplayName);
          }}
          setUpdateEmail={(updateEmail) => {
            setUpdateEmail(updateEmail);
          }}
        />
      )}
      {updateEmail && !updateDisplayName && (
        <UpdateEmailDisplay
          email={email}
          onEmailChange={(value) => setEmail(value)}
          setUpdateEmail={(updateEmail) => setUpdateEmail(updateEmail)}
        />
      )}
      {!updateEmail && updateDisplayName && (
        <UpdateDisplayName
          firstName={firstName}
          lastName={lastName}
          password={password}
          onFirstNameChange={(value) => setFirstName(value)}
          onLastNameChange={(value) => setLastName(value)}
          onPasswordChange={(value) => setPassword(value)}
          setUpdateDisplayName={(updateDisplayName) =>
            setUpdateDisplayName(updateDisplayName)
          }
        />
      )}
    </SingleCardPage>
  );
};

export default Profile;
