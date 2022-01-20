import React from "react";
import Timer from "../Timer";
import {
  Phone,
  Heading,
  Container,
  Notch,
  BusinessLogo,
  Description,
  Title,
  RedeemButton,
} from "./styles";
import { CouponPreviewProps } from "./types";

const CouponPreview: React.FC<CouponPreviewProps> = ({
  primaryColor,
  title,
  description,
  expirationDate,
}) => {
  return (
    <Container>
      <Heading>Phone preview</Heading>
      <Phone>
        <Notch />
        <BusinessLogo primaryColor={primaryColor} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <RedeemButton primaryColor={primaryColor}>Redeem</RedeemButton>
        <Timer expirationDate={expirationDate} />
      </Phone>
    </Container>
  );
};

export default CouponPreview;
