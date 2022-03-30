import { extendType, nonNull, stringArg } from "nexus";

export const redeemCouponMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("redeemCoupon", {
      type: "CouponInstance",
      args: {
        id: nonNull(stringArg()),
        redeemedAt: nonNull(stringArg()),
      },
      resolve: async (_, { id, redeemedAt }, ctx) => {
        const couponInstance = await ctx.prisma.customer_Coupon.update({
          where: {
            id,
          },
          data: {
            redeemed: true,
            redeemedAt,
          },
        });

        return couponInstance;
      },
    });
  },
});
