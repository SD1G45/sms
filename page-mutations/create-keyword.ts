import { gql } from "@apollo/client";

export const CREATE_KEYWORD_MUTATION = gql`
    mutation CreateKeyword(
        $description: String!,
        $keyword: String!
    ) {
        newKeyWord(
            description: $description,
            keyword: $keyword
        ) {
            id
        }
    }
`;