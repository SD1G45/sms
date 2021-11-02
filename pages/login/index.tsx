import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TextField from "../../components/TextField";
import Checkbox from "../../components/Checkbox";
import Selector from "../../components/Selector";
import MultiSelector from "../../components/MultiSelector";
import {
  Page,
  Heading,
  StyledCard,
  PasswordTextField,
  EmailTextField,
  StyledButton,
} from "./styles";

const index = () => {
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

export default index;
