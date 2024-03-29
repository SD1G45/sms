import { makeSchema } from "nexus";
import path from "path";
import * as objects from "./objects";
import * as queries from "./queries";
import * as mutations from "./mutations";
import * as enums from "./enums";

export const schema = makeSchema({
  types: [objects, queries, mutations, enums],
  outputs: {
    typegen: path.join(process.cwd(), "generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated", "schema.graphql"),
  },
  contextType: {
    module: path.join(process.cwd(), "graphql", "context"),
    export: "Context",
  },
});
