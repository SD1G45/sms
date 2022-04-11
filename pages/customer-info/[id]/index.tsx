import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { StyledButton } from "../../../components/Button/styles";
import { Heading } from "../../../components/CouponPreview/styles";
import ErrorPopup from "../../../components/ErrorPopup";
import Timer from "../../../components/Timer";
import { initializeApollo } from "../../../lib/apolloClient";
import { OPEN_COUPON, REDEEM_COUPON } from "../../../page-mutations/reward";
import { EmailTextField } from "../../../page-styles/landingpage/styles";
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
  firstName?: string;
  lastName?: string;
}

interface Props {
  customer: Customer;
}

const index: React.FC<Props> = ({ customer }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorState, setError] = useState({ error: false, message: "" });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openMutation] = useMutation(OPEN_COUPON);
  const [redeemMutation] = useMutation(REDEEM_COUPON);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Page>
      <Container>
        <Top>
          <Name>Complete your profile</Name>
          <Description>Let [business] know who you are!</Description>
        </Top>
        <Middle>
          {" "}
          <Heading>Enter your first and last name</Heading>
          <EmailTextField
            label="First name"
            value={firstName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(event.target.value)
            }
          />
          <EmailTextField
            label="Last name"
            value={lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(event.target.value)
            }
          />
          <ErrorPopup error={errorState.error} message={errorState.message} />
        </Middle>
        <Bottom>
          {" "}
          <StyledButton disabled={loading} loading={loading}>
            Complete my profile
          </StyledButton>
        </Bottom>
      </Container>
    </Page>
  );
};

export default index;

// export async function getServerSideProps(context: any) {
//   const client = initializeApollo();
//   const { data } = await client.query({
//     context: {
//       headers: {
//         cookie: context.req.headers.cookie,
//       },
//     },
//     query: gql`
//       {
//         couponInstance(id: "${context.query.id}") {
//           id
//           redeemed
//           opened
//           coupon {
//             id
//             name
//             description
//             primaryColor
//             expirationDate
//             business {
//               logoUrl
//             }
//           }
//           customer {
//             phoneNumber
//           }
//         }
//       }
//     `,
//   });

//   if (data == null) {
//     return {
//       props: {},
//     };
//   }

//   return {
//     props: {
//       customer: data.couponInstance.customer,
//       coupon: {
//         ...data.couponInstance.coupon,
//         businessLogoUrl: data.couponInstance.coupon.business.logoUrl,
//       },
//       redeemed: data.couponInstance.redeemed,
//       opened: data.couponInstance.opened,
//     },
//   };
// }
