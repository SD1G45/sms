import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Background from "../../components/Background";
import Image from "next/Image";
import {
  Page,
  Heading,
  StyledCard,
  PasswordTextField,
  EmailTextField,
  StyledButton,
  LeftTriangleDiv,
  RightCircleDiv,
} from "../../page-styles/login/styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [staySignedInChecked, setStaySignedInChecked] = useState(true);
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
          <StyledButton>Continue</StyledButton>
        </StyledCard>
        <RightCircleDiv>
          <Image src="/StackedCircle.svg" width={300} height={300} />
        </RightCircleDiv>
      </Page>
    </>
  );
};

export default Login;
