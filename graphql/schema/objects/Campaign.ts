import { objectType } from "nexus";

export const Campaign = objectType({
  name: "Campaign",
  definition(t) {
    t.string("id");
    t.string("businessId");
    t.string("name");
    t.string("message");
    t.date("dateSent");
    t.string("couponId");
    t.field("coupon", {
      type: "Coupon",
      resolve: async (root, _args, ctx) => {
        if (!root.couponId) {
          throw new Error("No coupon id.");
        }

        const coupon = await ctx.prisma.coupon.findUnique({
          where: {
            id: root.couponId,
          },
        });

        return coupon;
      },
    });
    t.int("couponsOpened");
    t.int("couponsRedeemed");
    t.int("messagesSent");
    t.string("couponId");
    t.field("customers", { type: "CustomerList" });
  },
});
