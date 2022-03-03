import styled from "styled-components";
import Card from "../../components/Card";

export const StyledCard = styled(Card)`
  width: 100%;
  text-align: center;
`;

export const BackDiv = styled.div`
  margin-right: 100%;
  margin-top: 40px;
  width: 15%;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
export const LinkDiv = styled.div`
  display: flex;
`;

export const StyledHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 50px;
`;

export const HeaderDiv = styled.div`
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: 7px;
`;

export const StyledLink = styled(Label)`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;
