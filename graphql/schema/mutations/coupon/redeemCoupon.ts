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

        const coupon = await ctx.prisma.coupon.findFirst({
          where: {
            id: couponInstance.couponId,
          }
        })

        if (coupon == null) {
          throw new Error("Could not find coupon associated with customer coupon " + id);
        }

        coupon.redeemedDates.push(new Date(redeemedAt));

        await ctx.prisma.coupon.update({
          where: {
            id: coupon?.id,
          },
          data: {
            redeemed: coupon.redeemed + 1,
            redeemedDates: coupon.redeemedDates,
          }
        })

        return couponInstance;
      },
    });
  },
});
