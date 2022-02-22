import { objectType } from "nexus";

export const CouponInstance = objectType({
  name: "CouponInstance",
  definition(t) {
    t.string("id");
    t.boolean("redeemed");
    t.boolean("opened");
    t.string("couponId");
    t.string("customerId");
    t.field("customer", {
      type: "Customer",
      resolve: async (root, _args, ctx) => {
        if (!root.customerId) {
          throw new Error("Customer does not exist.");
        }

        const customer = await ctx.prisma.customer.findUnique({
          where: {
            id: root.customerId,
          },
        });

        return customer;
      },
    });
    t.field("coupon", {
      type: "Coupon",
      resolve: async (root, _args, ctx) => {
        if (!root.couponId) {
          throw new Error("Coupon does not exist.");
        }
        const coupon = await ctx.prisma.coupon.findUnique({
          where: {
            id: root.couponId,
          },
        });

        return coupon;
      },
    });
  },
});
