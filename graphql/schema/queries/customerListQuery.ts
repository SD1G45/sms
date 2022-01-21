import { extendType, list, nonNull, stringArg } from "nexus";
import { Coupon } from "../objects";

export const customerListQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("customerLists", {
      type: list(Coupon),
      args: {
        businessId: nonNull(stringArg()),
      },
      resolve: async (_, { businessId }, ctx) => {
        return await ctx.prisma.customer_List.findMany({
          where: {
            businessId,
          },
        });
      },
    });
  },
});
