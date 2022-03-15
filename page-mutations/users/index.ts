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

export const EDIT_USER_EMAIL_MUTATION = gql`
 mutation editUserEmail(
  $code: String!,
  $newEmail: String!,
 ) {
   editUserEmailMutation(
    code: $code
    newEmail: $newEmail,
   ) 
 }
`;

