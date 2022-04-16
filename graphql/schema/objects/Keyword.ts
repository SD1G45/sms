import { objectType } from "nexus";

export const Keyword = objectType({
  name: "Keyword",
  definition(t) {
    t.string("id");
    t.string("keyword");
    t.string("message");
    t.string("description");
    t.string("couponId");
    t.field("coupon", {
      type: "Coupon",
      resolve: async (root, _args, ctx) => {
        if (!root.couponId) {
          throw new Error("No coupon id");
        }

        const coupon = await ctx.prisma.coupon.findUnique({
          where: {
            id: root.couponId,
          },
        });

        return coupon;
      },
    });
    t.field("keyWordCustomerList", { type: "KeyWord_CustomerList" });
  },
});
