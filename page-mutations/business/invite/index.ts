import { gql } from "@apollo/client";

export const INVITE_ACCOUNT_MUTATION = gql`
  mutation InviteAccount($email: String!) {
    inviteAccount(email: $email)
  }
`;
