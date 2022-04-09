import { objectType } from "nexus";

export const Coupon = objectType({
  name: "Coupon",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("title");
    t.string("description");
    t.string("primaryColor");
    t.date("expirationDate");
    t.string("businessId");
    t.int("redeemCount", {
      resolve: async (root, _args, ctx) => {
        if (!root.id) {
          throw new Error("No coupon id");
        }

        const count = await ctx.prisma.customer_Coupon.count({
          where: {
            couponId: root.id,
            redeemed: true,
          },
        });

        return count;
      },
    });
    t.int("sentCount", {
      resolve: async (root, _args, ctx) => {
        if (!root.id) {
          throw new Error("No coupon id");
        }

        const count = await ctx.prisma.customer_Coupon.count({
          where: {
            couponId: root.id,
          },
        });

        return count;
      },
    });
    t.int("openCount", {
      resolve: async (root, _args, ctx) => {
        if (!root.id) {
          throw new Error("No coupon id");
        }
        const count = await ctx.prisma.customer_Coupon.count({
          where: {
            couponId: root.id,
            opened: true,
          },
        });

        return count;
      },
    });
    t.field("business", {
      type: "Business",
      resolve: async (root, _args, ctx) => {
        if (!root.businessId) {
          throw new Error("No business.");
        }

        const business = await ctx.prisma.business.findUnique({
          where: {
            id: root.businessId,
          },
        });

        return business;
      },
    });
    t.list.date("redeemedDates", {
      resolve: async (root, _args, ctx) => {
        if (!root.id) {
          throw new Error("No coupon id");
        }

        const redeemedCustomerCoupons = await ctx.prisma.customer_Coupon.findMany({
          where: {
            couponId: root.id,
            redeemed: true,
          }
        });

        const dates = redeemedCustomerCoupons.map((customerCoupon) => {
          return customerCoupon.redeemedAt;
        });

        return dates;
      },
    });
  },
});
