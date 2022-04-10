import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TextField from "../../components/TextField";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  width: 500px;
  padding: 30px;
`;

export const FirstNameTextField = styled(TextField)`
  margin-bottom: 30px;
`;

export const EmailTextField = styled(TextField)`
  margin-bottom: 40px;
`;

export const PrismDiv = styled.div`
  z-index: 3;
`;

export const LogoDiv = styled.div`
  height: 100px;
  z-index: -1;
  //   margin-bottom: 500px;
`;
export const MainDiv = styled.div`
  height: 100%;
  justify-content: center;
  align-items: left;
  display: flex;
`;

export const Spacing = styled.div`
  height: 200px;
`;
export const StyledBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: -2;
`;

export const RightDiv = styled.div`
  display: flex;

  align-items: left;
  justify-content: left;
  //   width: 50%;
  //   height: 100%;
  margin-left: 50px;
  margin-bottom: 100px;
`;
export const Label = styled.label`
  display: block;

  padding-bottom: 7px;
`;
export const StyledLink = styled(Label)`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  width: 130px;
`;

export const SplitDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const SplitDivTwo = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;

  margin-top: 300px;
  padding-top: 32px;
`;

export const HeaderDiv = styled.div`
  width: 50%;
  height: 100%;
`;
export const ImageDiv = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  width: 50%;
  height: 75%;
`;
export const SecondHeaderDiv = styled.div`
  width: 80%;
  padding-top: 170px;
  padding-left: 200px;
  height: 75%;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RowDiv = styled.div``;
export const StyledHeader = styled.h1`
  overflow: hidden;
  font-size: 60px;
  color: black;
`;
export const SecondHeader = styled.h1`
  overflow: hidden;
  font-size: 30px;
  margin-bottom: 15px;
`;
export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BodyDiv = styled.div`
  padding: 20px;
  border: 2px solid;
  border-radius: 25px;
`;
export const StyledBody = styled.h1`
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  color: black;
  margin-top: 5px;
  font-size: 20px;
`;
export const SecondBody = styled.h1`
  font-weight: normal;
  line-height: 2rem;
  margin-top: 5px;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const ContainerDiv = styled.div`
  display: flex;

  width: 100%;
  margin-top: -1px;
  height: 80%;
`;

export const LineDiv = styled.div`
  margin-top: 10px;
  height: 5px;
  background-color: red;
  width: 320px;
  margin-bottom: 10px;
`;
