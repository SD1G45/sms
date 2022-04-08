import { gql } from "@apollo/client";

export const MESSAGE_COUNT_QUERY = gql`
  query MessageCount($businessId: String!) {
    messageCount(businessId: $businessId)
  }
`;