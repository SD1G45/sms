import { gql } from "@apollo/client";

export const CAMPAIGN_QUERY = gql`
  query Campaign($id: String!, $name: String!, $message: String!, $couponId: String!) {
    Campaign(id: $id, name: $name, message: $message, couponId: $couponId) {
      id
      name
      message
      couponId
    }
  }
`;