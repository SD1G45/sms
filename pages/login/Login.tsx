import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Background from "../../components/Background";
import Image from "next/image";
import Link from "next/link";
import {
  Page,
  Heading,
  StyledCard,
  PasswordTextField,
  EmailTextField,
  StyledButton,
  LeftTriangleDiv,
  RightCircleDiv,
  StyledLink,
  LinkDiv,
} from "../../page-styles/login/styles";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "./mutations";
import { useUserDispatch, useUserState } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedInChecked, setStaySignedInChecked] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const userDispatch = useUserDispatch();

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    errorPolicy: "all",
  });

  const onLogin = async () => {
    if (email.length === 0 || password.length === 0) {
      setEmptyError(true);
      return;
    }
    setEmptyError(false);
    setError(false);
    setLoading(true);
    try {
      const { data, errors } = await loginMutation({
        variables: {
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
          jid: data.loginUser.token,
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      <Page>
        <Background />
        <LeftTriangleDiv>
          <Image src="/StackedTriangle-1.svg" width={200} height={300} />
        </LeftTriangleDiv>
        <StyledCard>
          <Heading>Sign in to your account</Heading>
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
            linkText="Forgot your password?"
            linkValue="/reset-password"
          />
          <Checkbox
            checked={staySignedInChecked}
            label="Stay signed in"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setStaySignedInChecked(event.target.checked)
            }
          />
          <LinkDiv>
            <StyledButton onClick={() => onLogin()}>Continue</StyledButton>
            <Link href="/register">
              <StyledLink>New to us? Create an Account</StyledLink>
            </Link>
          </LinkDiv>
        </StyledCard>
        <RightCircleDiv>
          <Image src="/StackedCircle.svg" width={300} height={300} />
        </RightCircleDiv>
      </Page>
    </>
  );
};

export default Login;
