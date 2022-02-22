import { extendType, nonNull, stringArg } from "nexus";

export const newCouponMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCoupon", {
      type: "Coupon",
      args: {
        name: nonNull(stringArg()),
        title: nonNull(stringArg()),
        description: nonNull(stringArg()),
        primaryColor: nonNull(stringArg()),
        expirationDate: nonNull(stringArg()),
        businessId: nonNull(stringArg()),
      },
      resolve: async (
        _,
        { name, title, description, primaryColor, expirationDate, businessId },
        ctx
      ) => {
        const newCoupon = await ctx.prisma.coupon.create({
          data: {
            name,
            title,
            description,
            primaryColor,
            expirationDate,
            businessId,
            redeemed: 0,
            sent: 0,
            opened: 0,
          },
        });
        return newCoupon;
      },
    });
  },
});
