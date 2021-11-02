import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TextField from "../../components/TextField";

export const StyledCard = styled(Card)`
  width: 500px;
  padding: 30px;
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftTriangleDiv = styled.div`
  padding-top: 301px;
  margin-top:100px
  margin-left: 20px;
`;
export const RightTriangleDiv = styled.div`
  padding-bottom: 301px;
  margin-top:100px
  margin-left: 20px;
`;
export const Heading = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

export const PasswordTextField = styled(TextField)`
  margin-bottom: 30px;
`;

export const EmailTextField = styled(TextField)`
  margin-bottom: 40px;
`;
export const UsernameTextField = styled(TextField)`
  margin-bottom: 40px;
`;
export const FirstNameTextField = styled(TextField)`
  margin-bottom: 30px;
  padding-right: 10px;
`;

export const LastNameTextField = styled(TextField)`
  margin-bottom: 30px;
  padding-left: 10px;
`;

export const NameContainer = styled.div`
  width 100%;
  display:flex;
  justify-content: center;
  align-items: center;
 
`;
export const StyledButton = styled(Button)`
  margin-top: 30px;
`;
