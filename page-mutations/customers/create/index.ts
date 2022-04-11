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

export const UPDATE_CUSTOMER_INFO = gql`
  mutation addCustomerInfoMutation(
    $id: String!
    $first: String!
    $last: String!
  ) {
    addCustomerInfoMutation(
      customerId: $id
      firstName: $first
      lastName: $last
    ) {
      firstName
    }
  }
`;
