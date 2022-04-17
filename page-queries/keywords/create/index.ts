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
      redeemedDates
      redeemCount
    }
  }
`;

export const CUSTOMER_LIST_QUERY = gql`
  query CustomerList($businessId: String!) {
    customerLists(businessId: $businessId) {
      id
      name
      description
      count
    }
  }
`;

export const KEYWORD_QUERY = gql`
  query Keyword($businessId: String!) {
    keywords(businessId: $businessId) {
      keyword
      id
      coupon {
        sentCount
        openCount
        redeemCount
      }
    }
  }
`;

export const GET_KEYWORD_BY_ID = gql`
  query Keyword($keywordId: String!) {
    keyword(id: $keywordId) {
      keyword
      description
      message
      couponId
      customerListId
    }
  }
`;
