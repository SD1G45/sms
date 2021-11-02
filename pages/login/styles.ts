import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
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

export const StyledButton = styled(Button)`
  margin-top: 30px;
`;
