import styled from "styled-components";
import Card from "../../components/Card";
import Timer from "../../components/Timer";
import Iphone from "../../components/Iphone";
import Image from "next/image";
import Spinner from "../../components/Spinner";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const LoadingDiv = styled.div`
  z-index 3;
  position: fixed;
  justify-content: center;
  align-items: center;
  right: 50%; bottom: 50%;
  background-color: rgba(72, 128, 240, .02);
`;

export const StyledLoadCard = styled(Card)``;

export const TimerBox = styled(Timer)`
  width: 700px;
`;

export const IPhonePreview = styled(Iphone)`
  width: 100%;
`;

export const pageLoadingDiv = styled(Card)`
  width: 20%;
`;
