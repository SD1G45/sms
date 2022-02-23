/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from "react";
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
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../page-mutations/register";
import { useUserDispatch } from "../../context/UserContext/UserContext";
import SingleCardPage from "../../components/SingleCardPage";
import { LinkDiv, StyledLink } from "../../page-styles/login/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import ErrorPopup from "../../components/ErrorPopup";
import newRouteWithQueries from "../../helpers/newRouteWithQueries";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorState, setErrorState] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const userDispatch = useUserDispatch();
  const router = useRouter();

  useEffect(() => {
    setTimeout(
      () => setErrorState({ ...errorState, error: false, message: "" }),
      10000
    );
  });

  // Lock email to query param if provided.
  console.log(router.query);
  let emailFromQueryParam: string | null = null;
  if (router.query.email != null) {
    console.log(true);
    emailFromQueryParam = router.query.email as string;
  }

  const [registerMutation] = useMutation(REGISTER_MUTATION, {
    errorPolicy: "all",
  });

  const onRegister = async () => {
    if (
      firstName.length === 0 ||
      (!emailFromQueryParam && email.length === 0) ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setErrorState({
        ...errorState,
        error: true,
        message: "All fields must be filled in",
      });
      return;
    }
    setLoading(true);
    try {
      const { data, errors } = await registerMutation({
        variables: {
          firstName,
          lastName,
          email: emailFromQueryParam || email.toLowerCase(),
          password,
        },
      });

      if (errors && errors.length > 0) {
        setErrorState({
          ...errorState,
          error: true,
          message: errors[0].message,
        });
        setLoading(false);
        return;
      }

      userDispatch({
        type: "login",
        payload: {
          jid: data.registerUser.token,
          firstName: data.registerUser.user.firstName,
        },
      });
      setLoading(false);

      if (router.query.redirect != null) {
        router.push({
          pathname: router.query.redirect as string,
          query: { code: router.query.code },
        });
      } else {
        router.push("/welcome");
      }
    } catch (error) {
      setErrorState({
        ...errorState,
        error: true,
        message: "Something went wrong",
      });
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
          value={emailFromQueryParam || email}
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
        <ErrorPopup error={errorState.error} message={errorState.message} />
        <StyledButton
          onClick={() => onRegister()}
          disabled={loading}
          loading={loading}
        >
          Create Account
        </StyledButton>
        <LinkDiv>
          <Link href={newRouteWithQueries("/login", router)}>
            <StyledLink>Already have an account? Log in instead</StyledLink>
          </Link>
        </LinkDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Register;
