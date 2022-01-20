import styled from "styled-components";
import Card from "../../components/Card";
import Timer from "../../components/Timer";
import Iphone from "../../components/Iphone";
import Image from "next/image";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  width: 500px;
`;

export const TimerBox = styled(Timer)`
  width: 700px;
`;

export const IPhonePreview = styled(Iphone)`
  width: 100%;
`;
