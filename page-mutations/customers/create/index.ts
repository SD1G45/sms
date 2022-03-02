import { gql } from "@apollo/client";

export const NEW_CUSTOMER_LIST = gql`
  mutation NewCustomerList(
    $name: String!
    $description: String!
    $businessId: String!
  ) {
    newCustomerList(
      name: $name
      description: $description
      businessId: $businessId
    ) {
      id
      name
    }
  }
`;
