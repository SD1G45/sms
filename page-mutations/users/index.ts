import { gql } from "@apollo/client";

export const EDIT_USERNAME_MUTATION = gql`
 mutation editUserName(
  $id: String!,
  $firstName: String!,
  $lastName: String!,
  $password: String!,
  ) {
    editUserDisplayNameMutation(
     id: $id,
     firstName: $firstName,
     lastName: $lastName,
     password: $password
     ) {
     id
    }
}
`;
