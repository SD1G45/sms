import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Stepper from "../../components/Stepper";

export const StyledCard = styled(Card)`
  width: 500px;
  padding: 30px;
  margin-left: 250px;
  margin-right: 125px;
`;

export const Heading = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

export const StyledStepper = styled(Stepper)`
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonDivider = styled.div`
  width: 20px;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
`;

export const LogoPickerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoCircle = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const UploadLogoButton = styled(Button)`
  padding: 4px 4px;
  width: 125px;
  font-size: 16px;
  border-radius: 9px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.error};
  text-align: center;
  margin-top: 20px;
`;
