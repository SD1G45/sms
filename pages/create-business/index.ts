import { gql } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import { BUSINESS_QUERY } from "../../page-queries/create-business";

export async function getServerSideProps(context: any) {
  const client = initializeApollo();
  const business_id = context.query.business_id;

  if (business_id == null) return { props: { business: null } };

  const { data } = await client.query({
    context: {
      headers: {
        cookie: context.req.headers.cookie,
      },
    },
    query: BUSINESS_QUERY,
    variables: {
      id: business_id,
    },
  });

  return {
    props: { business: data.business },
  };
}

export { default } from "./CreateBusiness";
