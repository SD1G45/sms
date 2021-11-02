import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import {
  Page,
  Heading,
  StyledCard,
  PasswordTextField,
  EmailTextField,
  StyledButton,
} from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [staySignedInChecked, setStaySignedInChecked] = useState(true);
  return (
    <Page>
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
        <StyledButton>Continue</StyledButton>
      </StyledCard>
    </Page>
  );
};

export default Login;
