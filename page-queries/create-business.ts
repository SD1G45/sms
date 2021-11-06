import { gql } from "@apollo/client";

export const BUSINESS_QUERY = gql`
  query Business($id: String!) {
    business(id: $id) {
      id
      name
      logoUrl
    }
  }
`;
