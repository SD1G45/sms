import { extendType, nonNull, stringArg } from "nexus";

export const couponQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("coupon", {
      type: "Coupon",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, ctx) => {
        return await ctx.prisma.coupon.findFirst({
          where: {
            id,
          },
        });
      },
    });
  },
});
