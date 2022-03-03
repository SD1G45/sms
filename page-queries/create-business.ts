import { gql } from "@apollo/client";

export const BUSINESS_QUERY = gql`
  query Business($id: String!) {
    business(id: $id) {
      id
      name
      logoUrl
      phoneNumber
    }
  }
`;

export const AVAILABLE_PHONE_NUMBERS_QUERY = gql`
  query AvailablePhoneNumbers($areaCode: String!) {
    availablePhoneNumbers(areaCode: $areaCode) {
      friendlyName
      phoneNumber
    }
  }
`;
