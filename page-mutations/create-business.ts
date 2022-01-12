import { gql } from "@apollo/client";

export const CREATE_BUSINESS_MUTATION = gql`
  mutation CreateBusiness($name: String!) {
    newBusiness(name: $name) {
      id
    }
  }
`;

export const EDIT_BUSINESS_MUTATION = gql`
  mutation EditBusiness($name: String!, $id: String!) {
    editBusiness(name: $name, id: $id) {
      id
    }
  }
`;

export const PROVISION_PHONE_NUMBER_MUTATION = gql`
  mutation ProvisionPhoneNumber($phoneNumber: String!, $businessId: String!) {
    provisionPhoneNumber(phoneNumber: $phoneNumber, businessId: $businessId) {
      phoneNumber
      friendlyName
    }
  }
`;
