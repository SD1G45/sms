import { gql } from "@apollo/client";

export const COUPONS_QUERY = gql`
  query Coupons($businessId: String!) {
    coupons(businessId: $businessId) {
      id
      name
      title
      description
      primaryColor
      expirationDate
    }
  }
`;

export const CUSTOMER_LIST_QUERY = gql`
  query CustomerList($businessId: String!) {
    customerLists(businessId: $businessId) {
      id
      name
    }
  }
`;

export const KEYWORD_QUERY = gql`
  query Keyword($businessId: String!) {
    keywords(businessId: $businessId) {
      keyword
      dateCreated
    }
  }
`
