import styled from "styled-components";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

export const StyledCard = styled(Card)`
  width: 100%;
  text-align: center;
`;
export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 40px;
`;

export const SubHeading = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;
export const TextDiv = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 70%;
`;

export const StyledTextField = styled(TextField)`
  margin-top: 30px;
`;

export const StyledHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 20px;
`;
export const PhoneNumberDiv = styled.div`
  text-align: center;
`;
export const HeaderDiv = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const PhoneNumberLinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BackButton = styled(Button)`
  margin-top: 30px;
  width: 100px;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
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
