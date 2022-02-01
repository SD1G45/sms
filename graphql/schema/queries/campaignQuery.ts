import { extendType, list, nonNull, stringArg } from "nexus";
import { Campaign } from "../objects";

export const campaignQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("campaign", {
      type: list(Campaign),
      args: {
        businessId: nonNull(stringArg())
      },
      resolve: async (_, { businessId }, ctx) => {
        return await ctx.prisma.campaign.findMany({
          where: {
            businessId,
          },
        })
      },
    });
  },
});
