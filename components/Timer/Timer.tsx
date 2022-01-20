import React, { useEffect } from "react";
import { useState } from "react";

import {
  TimeBox,
  TimeDiv,
  RedeemCard,
  CountDown,
  TimeContainer,
  ValidForText,
} from "./styles";

const PhonePreview = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2022 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <RedeemCard>
        <ValidForText>Valid for the next </ValidForText>
        <TimeDiv>
          <TimeContainer>
            <TimeBox>{days}</TimeBox>
            <CountDown>Days</CountDown>
          </TimeContainer>
          <TimeContainer>
            <TimeBox>{hours}</TimeBox>
            <CountDown>Hours</CountDown>
          </TimeContainer>
          <TimeContainer>
            <TimeBox>{minutes}</TimeBox>
            <CountDown>Mins</CountDown>
          </TimeContainer>
          <TimeContainer>
            <TimeBox>{seconds}</TimeBox>
            <CountDown>Secs</CountDown>
          </TimeContainer>
        </TimeDiv>
      </RedeemCard>
    </>
  );
};

export default PhonePreview;
