import { extendType, nonNull, stringArg } from "nexus";

export const redeemCouponMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("redeemCoupon", {
      type: "CouponInstance",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, ctx) => {
        const couponInstance = await ctx.prisma.customer_Coupon.update({
          where: {
            id,
          },
          data: {
            redeemed: true,
          },
        });

        return couponInstance;
      },
    });
  },
});
