import { gql } from "@apollo/client";

export const CUSTOMER_QUERY = gql`
    query CustomerListCustomer($customerListId: String!) {
        customerListCustomers(customerListId: $customerListId) {
            id
            name
            customer {
                phoneNumber
                firstName
                lastName
                id
            }
        }
    }
`

export const ALL_CUSTOMERS_QUERY = gql`
    query AllCustomers($businessId: String!) {
        allCustomers(businessId: $businessId) {
            id
            phoneNumber
            onboardDate
        }
    }
`;