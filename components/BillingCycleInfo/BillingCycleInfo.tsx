import React from "react";
import { ColumnDiv, LargeText, LinkText, SmallText, TitleDiv, Wrapper } from "./styles";
import { BillingCycleInfoProps } from "./types";

const BillingCycleInfo: React.FC<BillingCycleInfoProps> = ({
  title,
  viewLinkText,
  amount,
  subtitle
}) => {
  return (
    <Wrapper>
      <ColumnDiv>
        <TitleDiv>
          <SmallText>{title}</SmallText>
          <LinkText>{viewLinkText}</LinkText>
        </TitleDiv>
        <LargeText>{amount}</LargeText>
        <SmallText>{subtitle}</SmallText>
      </ColumnDiv>
    </Wrapper>
  );
};

export default BillingCycleInfo;