import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Timer from "../../../components/Timer";
import { initializeApollo } from "../../../lib/apolloClient";
import { OPEN_COUPON, REDEEM_COUPON } from "../../../page-mutations/reward";
import {
  HeadingDiv,
  NextStep,
  StyledButton,
} from "../../../page-styles/create-business/styles";
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
import { StyledLink } from "../../../page-styles/settings/styles";

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

const index: React.FC<Props> = ({ coupon, redeemed, opened, customer }) => {
  const [isRedeemed, setRedeemed] = useState(redeemed);
  const router = useRouter();

  const contactLink = `/customer-info/${customer.phoneNumber}`;
  const [openMutation] = useMutation(OPEN_COUPON);
  const [redeemMutation] = useMutation(REDEEM_COUPON);
  const [firstRedeem, setFirstRedeem] = useState(false);
  useEffect(() => {
    if (!opened) {
      openMutation({ variables: { id: router.query.id } });
    }
  }, []);

  const handleRedeem = () => {
    redeemMutation({
      variables: {
        id: router.query.id,
        redeemedAt: new Date(),
      },
    });
    setFirstRedeem(false);
    setRedeemed(true);
  };

  const RedeemPopUp = () => {
    return (
      <>
        <NextStep>Are you sure you want to redeem?</NextStep>
        <HeadingDiv>This cannot be undone.</HeadingDiv>

        <StyledButton invert={true} onClick={handleRedeem}>
          Yes, I'm sure I want to redeem
        </StyledButton>
      </>
    );
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
            onClick={() => setFirstRedeem(true)}
          >
            Redeem
          </RedeemButton>
        </Middle>
        {firstRedeem && <RedeemPopUp />}
        <Bottom>
          {!isRedeemed ? (
            <Timer expirationDate={new Date(coupon.expirationDate)} />
          ) : (
            <HeadingDiv>
              <NextStep>Redeemed! Stay tuned for more offers.</NextStep>
            </HeadingDiv>
          )}
        </Bottom>
        <Link href={contactLink}>
          <StyledLink>Click here to complete your profile!</StyledLink>
        </Link>
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
