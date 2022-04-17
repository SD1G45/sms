import { extendType, nonNull, stringArg } from "nexus";

export const editCoupon = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editCouponMutation", {
      type: "Coupon",
      args: {
        id: nonNull(stringArg()),
        title: nonNull(stringArg()),
        name: nonNull(stringArg()),
        description: nonNull(stringArg()),
        primaryColor: nonNull(stringArg()),
        expirationDate: nonNull(stringArg()),
      },
      resolve: async (
        _,
        { id, name, description, primaryColor, expirationDate, title },
        ctx
      ) => {
        const coupon = await ctx.prisma.coupon.update({
          where: {
            id,
          },
          data: {
            name,
            description,
            primaryColor,
            expirationDate: new Date(expirationDate),
            title,
          },
        });
        return coupon;
      },
    });
  },
});
