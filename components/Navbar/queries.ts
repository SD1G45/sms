import { gql } from "@apollo/client";

export const BUSINESS_LIST_QUERY = gql`
  {
    viewer {
      businesses {
        id
        name
        logoUrl
      }
    }
  }
`;
