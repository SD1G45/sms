import { gql } from "@apollo/client";

export const BUSINESS_USERS_QUERY = gql`
  query Business_Users($businessId: String!) {
    businessUsers(businessId: $businessId) {
      businesses {
        id
      }
    }
  }
`;

export const EMAIL_RESET_CODE_QUERY = gql`
  query EmailResetCode($value: String!) {
    emailResetCode(value: $value) {
      email
    }
  }
`;
