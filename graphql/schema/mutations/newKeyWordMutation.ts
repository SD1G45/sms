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
        customerListId: nonNull(stringArg()),
      },
      resolve: async (
        _,
        { keyword, description, businessId, customerListId },
        ctx
      ) => {
        const newKeyWord = await ctx.prisma.keyword.create({
          data: {
            keyword,
            description,
            businessId,
          },
        });

        await ctx.prisma.keyword_Customer_List.create({
          data: {
            customerListId,
            keywordId: newKeyWord.id,
          },
        });

        return newKeyWord;
      },
    });
  },
});
