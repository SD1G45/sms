import { gql } from "@apollo/client";

export const REDEEM_COUPON = gql`
  mutation RedeemCoupon($id: String!, $redemeedAt: String!) {
    redeemCoupon(id: $id, redeemedAt: $redeemedAt) {
      id
      redeemed
    }
  }
`;

export const OPEN_COUPON = gql`
  mutation OpenCoupon($id: String!) {
    openCoupon(id: $id) {
      id
    }
  }
`;
