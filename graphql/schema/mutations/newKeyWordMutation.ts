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
        couponId: nonNull(stringArg()),
        message: nonNull(stringArg()),
      },
      resolve: async (
        _,
        { keyword, description, businessId, customerListId, couponId, message },
        ctx
      ) => {
        const newKeyWord = await ctx.prisma.keyword.create({
          data: {
            keyword: keyword.toLowerCase(),
            message,
            description,
            customersOnboarded: 0,
            couponsOpened: 0,
            couponsRedeemed: 0,
            dateCreated: new Date(),
            businessId,
            couponId,
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
