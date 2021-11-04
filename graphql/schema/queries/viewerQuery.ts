import { extendType } from "nexus";

export const viewerQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("viewer", {
      type: "User",
      resolve: async (_root, _args, ctx) => {
        return ctx.currentUser;
      },
    });
  },
});
