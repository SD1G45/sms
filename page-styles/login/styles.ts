import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TextField from "../../components/TextField";

export const StyledCard = styled(Card)`
  width: 500px;
  padding: 30px;
  margin-left: 250px;
  margin-right: 125px;
`;

export const LeftTriangleDiv = styled.div`
  padding-top: 301px;
`;
export const RightCircleDiv = styled.div`
  padding-bottom: 301px;
  margin-top:100px
  margin-left: 20px;
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
export const Label = styled.label`
  display: block;
  padding-bottom: 7px;
`;

export const LinkDiv = styled.div`
  text-align: center;
`;
export const StyledLink = styled(Label)`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
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
