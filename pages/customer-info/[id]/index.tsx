import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Timer from "../../../components/Timer";
import { initializeApollo } from "../../../lib/apolloClient";
import { OPEN_COUPON, REDEEM_COUPON } from "../../../page-mutations/reward";
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
  const router = useRouter();

  const [openMutation] = useMutation(OPEN_COUPON);
  const [redeemMutation] = useMutation(REDEEM_COUPON);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Page>
      <Container>
        {/* <Top>
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
        </Bottom> */}
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
