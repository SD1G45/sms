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
    t.int("opened");
    t.int("redeemed");
    t.int("sent");
  },
});
