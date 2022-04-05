import { extendType, nonNull, stringArg } from "nexus";

export const openCouponMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("openCoupon", {
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
            opened: true,
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

        await ctx.prisma.coupon.update({
          where: {
            id: coupon?.id,
          },
          data: {
            opened: coupon.opened + 1
          }
        })

        return couponInstance;
      },
    });
  },
});
