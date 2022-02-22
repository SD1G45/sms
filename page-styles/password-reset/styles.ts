import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TextField from "../../components/TextField";
export const StyledHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

export const HeaderDiv = styled.div`
  text-align: center;
`;

export const NewPasswordInput = styled(TextField)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const StyledCard = styled(Card)`
  width: 500px;
`;

export const BackButton = styled(Button)`
  margin-top: 30px;
  width: 15%;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
