import { gql } from "@apollo/client";

export const INVITE_ACCOUNT_MUTATION = gql`
  mutation InviteAccount($email: String!, $role: Role!, $businessId: String!) {
    inviteAccount(email: $email, role: $role, businessId: $businessId)
  }
`;
