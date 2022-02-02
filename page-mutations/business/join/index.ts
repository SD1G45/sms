import { gql } from "@apollo/client";

export const ACCEPT_INVITATION_MUTATION = gql`
  mutation AcceptInvitation($code: String!) {
    acceptInvitation(code: $code)
  }
`;
