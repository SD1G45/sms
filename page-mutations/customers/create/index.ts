import { gql } from "@apollo/client";

export const NEW_CUSTOMER_LIST = gql`
  mutation NewCoupon($name: String!, $businessId: String!) {
    newCustomerList(name: $name, businessId: $businessId) {
      id
      name
    }
  }
`;
