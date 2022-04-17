import { gql } from "@apollo/client";

export const COUPON_QUERY = gql`
  query Coupon($businessId: String!) {
    coupons(businessId: $businessId) {
      id
      name
      openCount
      redeemCount
      sentCount
    }
  }
`;

export const GET_COUPON_BY_ID = gql`
  query Coupon($couponId: String!) {
    coupon(id: $couponId) {
      name
      title
      description
      primaryColor
      expirationDate
    }
  }
`;
