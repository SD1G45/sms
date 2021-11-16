import { extendType, nonNull, stringArg } from "nexus";

export const newCampaignMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCampaign", {
      type: "Campaign",
      args: {
        name: nonNull(stringArg()),
        message: nonNull(stringArg()),
        couponId: nonNull(stringArg()),
      },
      resolve: async (
        _,
        { name, message, couponId },
        ctx
      ) => {
        const newCampaign = await ctx.prisma.campaign.create({
          data: {
            name,
            message,
            couponId
          },
        });

        return newCampaign;
      },
    });
  }
});