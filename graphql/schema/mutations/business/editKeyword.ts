import { extendType, nonNull, stringArg } from "nexus";

export const editKeyword = extendType({
  type: 'Mutation',
  definition(t) {
    t.field("editKeywordMutation", {
      type: "Keyword", 
      args: {
        id: nonNull(stringArg()),
        keyword: nonNull(stringArg()),
        description: nonNull(stringArg()),
        message: nonNull(stringArg()),
        customerListId: nonNull(stringArg()),
        couponId: nonNull(stringArg())
      },
      resolve: async(
        _,
        {id, keyword, description, message, customerListId, couponId},
        ctx
      ) => {
        const currKeywordCustList = await ctx.prisma.keyword_Customer_List.findFirst({
          where: {
            keywordId: id
          }
        });
        const keyword_ = await ctx.prisma.keyword.update({
          where: {
            id
          }, 
          data: {
            keyword, description, message, couponId
          }
        });

        if (currKeywordCustList?.customerListId != customerListId) {
          await ctx.prisma.keyword_Customer_List.update({
            where: {
              id: currKeywordCustList?.id
            }, 
            data: {
              customerListId
            }
          })
        }
        return keyword_;
      }
    })
  }
});