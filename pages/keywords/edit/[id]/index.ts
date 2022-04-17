import { initializeApollo } from "../../../../lib/apolloClient";
import { GET_KEYWORD_BY_ID } from "../../../../page-queries/keywords/create";

export { default } from "./EditKeyword";

export async function getServerSideProps(context: any) {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GET_KEYWORD_BY_ID,
    variables: { keywordId: context.query.id },
  });

  const initialKeyword = data.keyword.keyword;
  const initialDescription = data.keyword.description;
  const initialMessage = data.keyword.message;
  const initialCouponId = data.keyword.couponId;
  const initialCustomerListId = data.keyword.customerListId;

  return {
    props: {
      initialKeyword,
      initialDescription,
      initialMessage,
      initialCouponId,
      initialCustomerListId,
    },
  };
}
