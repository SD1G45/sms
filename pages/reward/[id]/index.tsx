import { gql } from "@apollo/client";
import React, { useState } from "react";
import Timer from "../../../components/Timer";
import { initializeApollo } from "../../../lib/apolloClient";
import {
  Bottom,
  Container,
  Description,
  Logo,
  Middle,
  Name,
  Page,
  RedeemButton,
  Top,
} from "../../../page-styles/reward/styles";

interface Customer {
  phoneNumber: string;
}

interface Coupon {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  expirationDate: Date;
  businessLogoUrl: string;
}

interface Props {
  customer: Customer;
  coupon: Coupon;
  redeemed: boolean;
  opened: boolean;
}

const index: React.FC<Props> = ({ coupon, redeemed }) => {
  const [isRedeemed, setRedeemed] = useState(redeemed);
  console.log(coupon.expirationDate);

  const handleRedeem = () => {
    setRedeemed(true);
  };

  return (
    <Page>
      <Container>
        <Top>
          <Logo src={coupon.businessLogoUrl} />
          <Name>{coupon.name}</Name>
          <Description>{coupon.description}</Description>
        </Top>
        <Middle>
          <RedeemButton
            backgroundColor={coupon.primaryColor}
            disabled={isRedeemed}
            onClick={handleRedeem}
          >
            Redeem
          </RedeemButton>
        </Middle>
        <Bottom>
          <Timer expirationDate={new Date(coupon.expirationDate)} />
        </Bottom>
      </Container>
    </Page>
  );
};

export default index;

export async function getServerSideProps(context: any) {
  const client = initializeApollo();
  const { data } = await client.query({
    context: {
      headers: {
        cookie: context.req.headers.cookie,
      },
    },
    query: gql`
      {
        couponInstance(id: "${context.query.id}") {
          id
          redeemed
          opened
          coupon {
            id
            name
            description
            primaryColor
            expirationDate
            business {
              logoUrl
            }
          }
          customer {
            phoneNumber
          }
        }
      }
    `,
  });

  if (data == null) {
    return {
      props: {},
    };
  }

  return {
    props: {
      customer: data.couponInstance.customer,
      coupon: {
        ...data.couponInstance.coupon,
        businessLogoUrl: data.couponInstance.coupon.business.logoUrl,
      },
      redeemed: data.couponInstance.redeemed,
      opened: data.couponInstance.opened,
    },
  };
}
