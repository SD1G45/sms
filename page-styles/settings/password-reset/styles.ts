import styled from "styled-components";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import TextField from "../../../components/TextField";

export const StyledHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const HeaderDiv = styled.div`
  text-align: center;
`;

export const BackButton = styled(Button)`
  margin-top: 30px;
  width: 100px;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const NewPasswordInput = styled(TextField)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const StyledCard = styled(Card)`
  width: 500px;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: 7px;
`;

export const StyledLink = styled(Label)`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    opacity: 70%;
  }
`;
