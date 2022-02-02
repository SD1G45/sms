import { gql } from "@apollo/client";

export const BUSINESS_INVITE_CODE_QUERY = gql`
  query BusinessInviteCode($value: String!) {
    businessInviteCode(value: $value) {
      role
      email
      business {
        name
      }
    }
  }
`;
