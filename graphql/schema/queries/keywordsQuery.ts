import { extendType, list, nonNull, stringArg } from "nexus";
import { Keyword } from "../objects";

export const keywordsQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("keywords", {
      type: list(Keyword),
      args: {
        businessId: nonNull(stringArg()),
      },
      resolve: async (_, { businessId }, ctx) => {
        return await ctx.prisma.keyword.findMany({
          where: {
            businessId,
          },
        });
      },
    });
  },
});
