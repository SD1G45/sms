
 import { gql } from "@apollo/client";
 export const RESET_PASSWORD_MUTATION = gql`
   mutation ResetPassword($oldPassword: String!, $newPassword: String!) {
     resetPassword(oldPassword: $oldPassword, newPassword: $newPassword) {
        id
     }
   }
 `;
