import styled from "styled-components";
import TextField from "../../../components/TextField";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
export const FlexContainer = styled.div`
  display: flex;
  padding: 50px 80px;
  width: 100%;
  /* background-color: green; */
`;

export const HalfPage = styled.div`
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

export const StyledCard = styled(Card)`
  width: 550px;
  height: 450px;
  position: absolute;
  top: 30%;
  padding: 30px;
  margin-left: 200px;
  margin-top: 50px;
  text-align: center;
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

export const CardHeading = styled.h1`
  font-size: 1.4rem;
  margin-top: 5px;
`;
export const CardDescription = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const SetupLaterButton = styled(Button)`
  width: 200px;
  height: 45px;
  margin-top: 45px;
  font-size: 1rem;
  text-align: center;
  background-color: white;
  color: #4881f0;
  border-width: 2px;
  border-color: #4881f0;
`;
export const ConnectButton = styled(Button)`
  width: 200px;
  height: 45px;
  margin: 22px;
  font-size: 1rem;
  text-align: center;
`;
export const CreateButton = styled(Button)`
  width: 170px;
  height: 50px;
  margin: 5px;
  margin-top: 100px;
  margin-left: 200px;
`;
