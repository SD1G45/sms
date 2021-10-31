import { schema } from "../../../graphql/schema";
import { context } from "../../../graphql/context";
import { ApolloServer } from "apollo-server-micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({
  schema,
  context,
  // playground: true,
  introspection: true,
}).createHandler({
  path: "/api/graphql",
});
