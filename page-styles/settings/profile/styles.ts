import styled from "styled-components";
import Button from "../../../components/Button";

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const StyledHeader = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

export const HeaderDiv = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const BackButton = styled(Button)`
  margin-top: 30px;
  width: 100px;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
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
