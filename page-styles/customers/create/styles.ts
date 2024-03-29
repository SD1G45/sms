import styled from "styled-components";
import MultiSelector from "../../../components/MultiSelector";
import Selector from "../../../components/Selector";
import TextField from "../../../components/TextField";

export const HeaderDiv = styled.div`
  width: 200%;
`;

export const FlexContainer = styled.div`
  padding: 50px 80px;
  width: 100%;
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

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: flex-end;
`;

export const StyledSelector = styled(Selector)`
  margin-bottom: 30px;
`;

export const StyledMultiSelector = styled(MultiSelector)`
  margin-bottom: 30px;
`;
