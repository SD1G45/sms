import React, { useState } from "react";
import Background from "../../components/Background";
import {
  Heading,
  StyledCard,
  PasswordTextField,
  EmailTextField,
  StyledButton,
  FirstNameTextField,
  LastNameTextField,
  NameContainer,
} from "../../page-styles/register/styles";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../page-mutations/register";
import { useUserDispatch } from "../../context/UserContext";
import SingleCardPage from "../../components/SingleCardPage";
import { LinkDiv, StyledLink } from "../../page-styles/login/styles";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emptyError, setEmptyError] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const userDispatch = useUserDispatch();

  const [registerMutation] = useMutation(REGISTER_MUTATION, {
    errorPolicy: "all",
  });

  const onRegister = async () => {
    if (
      firstName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setEmptyError(true);
      return;
    }
    setEmptyError(false);
    setLoading(true);
    setError(false);
    try {
      const { data, errors } = await registerMutation({
        variables: {
          firstName,
          lastName,
          email,
          password,
        },
      });

      if (errors && errors.length > 0) {
        setError(true);
        setLoading(false);
        return;
      }

      userDispatch({
        type: "login",
        payload: {
          jid: data.registerUser.token,
        },
      });
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <SingleCardPage>
      <StyledCard>
        <Heading>Create a new account</Heading>
        <NameContainer>
          <FirstNameTextField
            label="First Name"
            value={firstName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(event.target.value)
            }
          />
          <LastNameTextField
            label="Last Name"
            value={lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(event.target.value)
            }
          />
        </NameContainer>
        <EmailTextField
          label="Email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <PasswordTextField
          label="Password"
          value={password}
          type="password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <PasswordTextField
          label="Confirm password"
          value={confirmPassword}
          type="password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(event.target.value)
          }
          error={confirmPassword !== password}
          errorMessage="Passwords don't match"
        />

        <LinkDiv>
          <Link href="/login">
            <StyledLink>Already have an account? Log in instead</StyledLink>
          </Link>
        </LinkDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Register;
