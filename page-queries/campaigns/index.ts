import { gql } from "@apollo/client";

export const CAMPAIGN_QUERY = gql`
    query Campaign($businessId: String!) {
        campaign(businessId: $businessId) {
            name
            dateSent
            messagesSent
            couponsOpened
            couponsRedeemed
        }
    }
`