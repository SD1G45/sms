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

        return couponInstance;
      },
    });
  },
});
