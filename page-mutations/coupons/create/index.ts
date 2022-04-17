import { gql } from "@apollo/client";

export const NEW_COUPON = gql`
  mutation NewCoupon(
    $name: String!
    $title: String!
    $description: String!
    $primaryColor: String!
    $expirationDate: String!
    $businessId: String!
  ) {
    newCoupon(
      name: $name
      title: $title
      description: $description
      primaryColor: $primaryColor
      businessId: $businessId
      expirationDate: $expirationDate
    ) {
      id
    }
  }
`;

export const EDIT_COUPON = gql`
  mutation EditCoupon(
    $id: String!
    $title: String!
    $name: String!
    $description: String!
    $primaryColor: String!
    $expirationDate: String!
  ) {
    editCouponMutation(
      id: $id
      title: $title
      name: $name
      description: $description
      primaryColor: $primaryColor
      expirationDate: $expirationDate
    ) {
      id
    }
  }
`;
