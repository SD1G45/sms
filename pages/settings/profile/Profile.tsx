import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { StyledCard } from "../../../components/Card/styles";
import SingleCardPage from "../../../components/SingleCardPage";
import TextField from "../../../components/TextField";
import {
  Heading,
  BackButton,
  HeaderDiv,
  StyledButton,
  StyledHeader,
  SubHeading,
  StyledTextField,
} from "../../../page-styles/settings/profile/styles";

import { FcDataEncryption } from "react-icons/fc";
import { useRouter } from "next/router";
import newRouteWithQueries from "../../../helpers/newRouteWithQueries";
import Link from "next/link";
import { StyledLink } from "../../../page-styles/settings/profile/styles";
import { FcPortraitMode } from "react-icons/fc";
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
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  setUpdateDisplayName: (value: boolean) => void;
}

const UpdateDisplayName: React.FC<updateDisplayNameProps> = ({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
  setUpdateDisplayName,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
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
        <StyledButton disabled={loading} loading={loading}>
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
  const [displayName, setDisplayName] = useState("");
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
          displayName={displayName}
          onDisplayNameChange={(value) => setDisplayName(value)}
          setUpdateDisplayName={(updateDisplayName) =>
            setUpdateDisplayName(updateDisplayName)
          }
        />
      )}
    </SingleCardPage>
  );
};

export default Profile;