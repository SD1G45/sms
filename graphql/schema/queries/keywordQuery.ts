import { extendType, nonNull, stringArg } from "nexus";

export const keywordQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("keyword", {
      type: "Keyword",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, ctx) => {
        return await ctx.prisma.keyword.findFirst({
          where: {
            id,
          },
        });
      },
    });
  },
});
