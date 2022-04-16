import { objectType } from "nexus";

export const Keyword = objectType({
  name: "Keyword",
  definition(t) {
    t.string("id");
    t.string("keyword");
    t.string("message");
    t.string("description");
    t.string("couponId");
    t.field("keyWordCustomerList", {
      type: "KeyWord_CustomerList", 
      resolve: async (root, _args, ctx) => {
        console.log("here");
        if (!root) 
          throw new Error("missing root for keyword customer list");

        const id = root.id as string;

        const list = await ctx.prisma.keyword_Customer_List.findFirst({
          where: {
            keywordId: id
          }
        });

        return list;
      }
    })
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
  },
});
