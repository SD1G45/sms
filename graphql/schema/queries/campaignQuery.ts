import { extendType, nonNull, stringArg } from "nexus";

export const campaignQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("campaign", {
      type: "Campaign",
      args: {
        id: nonNull(stringArg()),
        name: nonNull(stringArg()),
        message: nonNull(stringArg()),
        couponId: nonNull(stringArg())
      },
      resolve: async (_, { id }, ctx) => {
        return await ctx.prisma.campaign.findFirst({
          where: {
            id,
          },
        })
      },
    });
  },
});
