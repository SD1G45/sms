import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import {
  Page,
  Heading,
  StyledCard,
  PasswordTextField,
  EmailTextField,
  StyledButton,
  FirstNameTextField,
  LastNameTextField,
  NameContainer,
  UsernameTextField,
  LeftTriangleDiv,
  RightCircleDiv,
  tiltedBackGround,
  Line,
  Background,
} from "../../page-styles/register/styles";
import Image from "next/image";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginChecked, setLoginChecked] = useState("");

  return (
    <>
      <Background>
        <Line>
          <Page>
            <LeftTriangleDiv>
              <Image src="/StackedTriangle-1.svg" width={200} height={300} />
            </LeftTriangleDiv>
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
                    setFirstName(event.target.value)
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
              <UsernameTextField
                label="Username"
                value={username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(event.target.value)
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
              <Checkbox
                checked={loginChecked}
                label="Log me in"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setLoginChecked(event.target.checked)
                }
              />
              <StyledButton>Continue</StyledButton>
            </StyledCard>
            <RightCircleDiv>
              <Image src="/StackedCircle.svg" width={300} height={300} />
            </RightCircleDiv>
          </Page>
        </Line>
      </Background>
    </>
  );
};

export default Register;
