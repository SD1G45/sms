import { extendType, list, nonNull, stringArg } from "nexus";
import { Coupon } from "../objects";

export const couponsQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("coupons", {
      type: list(Coupon),
      args: {
        businessId: nonNull(stringArg()),
      },
      resolve: async (_, { businessId }, ctx) => {
        return await ctx.prisma.coupon.findMany({
          where: {
            businessId,
          },
        });
      },
    });
  },
});
