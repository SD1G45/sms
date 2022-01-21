import { gql } from "@apollo/client";

export const NEW_KEYWORD = gql`
  mutation NewKeyword(
    $keyword: String!
    $message: String!
    $couponId: String!
    $description: String!
    $customerListId: String!
    $businessId: String!
  ) {
    newKeyWord(
      keyword: $keyword
      businessId: $businessId
      couponId: $couponId
      message: $message
      description: $description
      customerListId: $customerListId
    ) {
      id
      keyword
    }
  }
`;
