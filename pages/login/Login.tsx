import React, { useState, useEffect } from "react";
import Checkbox from "../../components/Checkbox";
import ErrorPopup from "../../components/ErrorPopup";
import Link from "next/link";
import {
  Heading,
  StyledCard,
  PasswordTextField,
  EmailTextField,
  StyledButton,
  StyledLink,
  LinkDiv,
} from "../../page-styles/login/styles";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../page-mutations/login";
import { useUserDispatch } from "../../context/UserContext/UserContext";
import SingleCardPage from "../../components/SingleCardPage";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedInChecked, setStaySignedInChecked] = useState(false);
  const [errorState, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const userDispatch = useUserDispatch();
  const router = useRouter();

  // Lock email to query param if provided.
  let emailFromQueryParam: string | null = null;
  if (router.query.email != null) {
    emailFromQueryParam = router.query.email;
  }

  useEffect(() => {
    setTimeout(
      () => setError({ ...errorState, error: false, message: "" }),
      10000
    );
  });

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    errorPolicy: "all",
  });

  const onLogin = async () => {
    if (email.length === 0 || password.length === 0) {
      setError({
        ...errorState,
        error: true,
        message: "Missing email and/or password",
      });
      return;
    }
    setLoading(true);
    try {
      const { data, errors } = await loginMutation({
        variables: {
          email,
          password,
        },
      });

      if (errors && errors.length > 0) {
        setError({ ...errorState, error: true, message: errors[0].message });
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
      router.push("/dashboard");
    } catch (error) {
      setLoading(false);
      setError({ ...errorState, error: true, message: "error" });
    }
  };

  return (
    <SingleCardPage>
      ç{" "}
      <StyledCard>
        <Heading>Sign in to your account</Heading>
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
          linkText="Forgot your password?"
          linkValue="/reset-password"
        />
        <ErrorPopup error={errorState.error} message={errorState.message} />
        <Checkbox
          checked={staySignedInChecked}
          label="Stay signed in"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setStaySignedInChecked(event.target.checked)
          }
        />
        <StyledButton
          onClick={() => onLogin()}
          disabled={loading}
          loading={loading}
        >
          Login
        </StyledButton>
        <LinkDiv>
          <Link href="/register" passHref>
            <StyledLink>New to us? Create an Account</StyledLink>
          </Link>
        </LinkDiv>
      </StyledCard>
    </SingleCardPage>
  );
};

export default Login;
