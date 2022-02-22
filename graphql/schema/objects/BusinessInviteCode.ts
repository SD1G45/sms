import { objectType } from "nexus";

export const BusinessInviteCode = objectType({
  name: "BusinessInviteCode",
  definition(t) {
    t.string("id");
    t.string("email");
    t.string("role");
    t.string("businessId");
    t.field("business", {
      type: "Business",
      resolve: async (parent, _args, ctx) => {
        if (parent.businessId == null)
          throw new Error("Business not attached to code");
        return await ctx.prisma.business.findUnique({
          where: { id: parent.businessId },
        });
      },
    });
  },
});
