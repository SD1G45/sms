import { extendType, nonNull, stringArg } from "nexus";

export const newKeyWordMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newKeyWord", {
      type: "Keyword",
      args: {
        keyword: nonNull(stringArg()),
        description: nonNull(stringArg()),
        businessId: nonNull(stringArg()),
      },
      resolve: async (_, { keyword, description, businessId }, ctx) => {
        const newKeyWord = await ctx.prisma.keyword.create({
          data: {
            keyword,
            description,
            businessId,
          },
        });

        return newKeyWord;
      },
    });
  },
});
