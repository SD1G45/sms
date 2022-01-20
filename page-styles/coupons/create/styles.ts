import styled from "styled-components";
import TextField from "../../../components/TextField";

export const FlexContainer = styled.div`
  display: flex;
  padding: 50px 80px;
`;

export const HalfPage = styled.div`
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

export const SubHeading = styled.h2`
  font-size: 1rem;
  margin-bottom: 30px;
`;

export const StyledTimePicker = styled(TextField)`
  margin-left: 20px;
`;

export const ExpirationContainer = styled.div`
  display: flex;
`;

export const PhoneSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 80px;
`;
