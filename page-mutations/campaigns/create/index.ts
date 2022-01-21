import { gql } from "@apollo/client";

export const NEW_CAMPAIGN = gql`
  mutation NewCampaign(
    $message: String!
    $couponId: String!
    $customerListId: String!
    $businessId: String!
    $name: String!
  ) {
    newCampaign(
      businessId: $businessId
      couponId: $couponId
      message: $message
      customerListId: $customerListId
      name: $name
    ) {
      id
    }
  }
`;
