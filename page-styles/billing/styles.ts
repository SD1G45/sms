import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";

export const StyledCard = styled(Card)`
  width: 500px;
  padding: 30px;
  margin-left: 250px;
  margin-right: 125px;
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 30px;
`;

export const Heading = styled.p`
  font-size: 1.4rem;
  margin-bottom: 25px;
`;
