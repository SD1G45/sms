import styled from "styled-components";
import Card from "../../../components/Card";

export const StyledCard = styled(Card)`
  width: 40%;
  justify-content: center;
`;
export const SubHeading = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
`;
export const HeadingDiv = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const StyledHeading = styled.h1`
  font-size: 2rem;
`;

export const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameItem = styled.div`
  // border-right 1px solid black
`;

export const RoleItem = styled.div``;

export const Divider = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid black;
  opacity: 20%;
  margin: 20px;
`;

export const DataContainer = styled.div`
  margin: auto;
  width: 80%;
`;

export const BottomLinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
