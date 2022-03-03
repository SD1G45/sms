import { gql } from "@apollo/client";

export const BUSINESS_USERS_QUERY = gql`
  query Business_Users($businessId: String!) {
    businessUsers(businessId: $businessId) {
      businesses
    }
  }
`;
