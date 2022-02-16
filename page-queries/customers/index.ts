import { gql } from "@apollo/client";

export const CUSTOMER_QUERY = gql`
    query CustomerListCustomer($customerListId: String!) {
        customerListCustomers(customerListId: $customerListId) {
            id
            customer {
                phoneNumber
                firstName
                lastName
                id
            }
        }
    }
`