import { gql } from "@apollo/client";

export const GET_CUSTOMER_LIST_BY_ID = gql`
  query CustomerList($customerListId: String!) {
    customerListQuery(id: $customerListId) {
      id
      name
      businessId
    }
  }
`;
