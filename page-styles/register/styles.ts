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

export const Line = styled.div`
border-left 4px dashed #ccc

`;

export const Background = styled.div`
  top: 0;
  left: 0;
  display: flex;
  color: rgba(0, 0, 0, 0.29);
`;

export const tiltedBackGround = styled.div`
  background-color: black;
  width: 100%;
  border-right: ;
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftTriangleDiv = styled.div`
  padding-top: 301px;
`;
export const RightCircleDiv = styled.div`
  padding-bottom: 301px;
  margin-top:100px
  margin-left: 20px;
`;
export const Heading = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

export const PasswordTextField = styled(TextField)`
  margin-bottom: 30px;
`;

export const EmailTextField = styled(TextField)`
  margin-bottom: 40px;
`;
export const UsernameTextField = styled(TextField)`
  margin-bottom: 40px;
`;
export const FirstNameTextField = styled(TextField)`
  margin-bottom: 30px;
  padding-right: 10px;
`;

export const LastNameTextField = styled(TextField)`
  margin-bottom: 30px;
  padding-left: 10px;
`;

export const NameContainer = styled.div`
  width 100%;
  display:flex;
  justify-content: center;
  align-items: center;
 
`;
export const StyledButton = styled(Button)`
  margin-top: 30px;
`;
