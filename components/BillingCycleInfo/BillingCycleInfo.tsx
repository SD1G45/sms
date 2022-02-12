import React from "react";
import { ColumnDiv, LargeText, LinkText, SmallText, TitleDiv, Wrapper } from "./styles";
import { BillingCycleInfoProps } from "./types";
import Link from "next/link";

const BillingCycleInfo: React.FC<BillingCycleInfoProps> = ({
  title,
  amount,
  subtitle,
  viewLinkText,
  linkRoute
}) => {
  return (
    <Wrapper>
      <ColumnDiv>
        <TitleDiv>
          <SmallText>{title}</SmallText>
          { viewLinkText && linkRoute ? 
            <Link href={linkRoute}>
             <LinkText>{viewLinkText}</LinkText>
            </Link>
            : 
            <></>
          }
        </TitleDiv>
        <LargeText>{amount}</LargeText>
        <SmallText>{subtitle}</SmallText>
      </ColumnDiv>
    </Wrapper>
  );
};

export default BillingCycleInfo;