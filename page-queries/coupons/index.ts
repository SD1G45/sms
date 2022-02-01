import { gql } from "@apollo/client";

export const COUPON_QUERY = gql`
  query Coupon($businessId: String!) {
    coupons(businessId: $businessId) {
      name
      opened
      redeemed
      sent
    }
  }`