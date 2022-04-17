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

export const EDIT_KEYWORD = gql`
  mutation editKeyword(
    $id: String!
    $keyword: String!
    $description: String!
    $message: String!
    $customerListId: String!
    $couponId: String!
  ) {
    editKeywordMutation(
      id: $id
      keyword: $keyword
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
