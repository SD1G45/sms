import React from "react";
import { ColumnDiv, SalesLargeText, SalesLinkText, SalesSmallText, TitleDiv, Wrapper } from "./styles";
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
          <SalesSmallText>{title}</SalesSmallText>
          <SalesLinkText>{viewLinkText}</SalesLinkText>
        </TitleDiv>
        <SalesLargeText>{amount}</SalesLargeText>
        <SalesSmallText>{subtitle}</SalesSmallText>
      </ColumnDiv>
    </Wrapper>
  );
};

export default BillingCycleInfo;