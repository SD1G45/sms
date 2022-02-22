import { extendType, list, nonNull, stringArg } from "nexus";
import { CouponInstance } from "../objects";

export const couponInstanceQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("couponInstance", {
      type: CouponInstance,
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, ctx) => {
        return await ctx.prisma.customer_Coupon.findUnique({
          where: {
            id,
          },
        });
      },
    });
  },
});
