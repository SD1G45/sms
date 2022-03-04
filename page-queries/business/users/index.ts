import { gql } from "@apollo/client";

export const BUSINESS_USERS_QUERY = gql`
  query Business_Users($businessId: String!) {
    usersForBusiness(businessId: $businessId) {
      id
      firstName
      lastName
    }
  }
`;
