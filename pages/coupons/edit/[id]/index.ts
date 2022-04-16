import { useRouter } from "next/router";
import { GET_COUPON_BY_ID } from "../../../../page-queries/coupons";
import { useLazyQuery } from "@apollo/client";
import { initializeApollo } from "../../../../lib/apolloClient";
export { default } from "./EditCoupon";

export interface CouponProps {
  name: string;
  description: string;
  title: string;
  primaryColor: string;
  expirationDate: string;
}

export async function getServerSideProps(context: any) {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GET_COUPON_BY_ID,
    variables: { couponId: context.query.id },
  });

  const initialTitle = data.coupon.title;
  const initialDescription = data.coupon.description;
  const initialName = data.coupon.name;
  const initialPrimaryColor = data.coupon.primaryColor;
  const initialExpirationDate = data.coupon.expirationDate;

  return {
    props: {
      initialTitle,
      initialDescription,
      initialName,
      initialPrimaryColor,
      initialExpirationDate,
    },
  };
}
