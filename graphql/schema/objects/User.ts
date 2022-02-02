import { list, objectType } from "nexus";
import { Business } from ".";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("firstName");
    t.string("lastName");
    t.string("email");
    t.field("businesses", {
      type: list(Business),
      resolve: async (parent, _args, ctx) => {
        if (parent.id == null) return [];
        const business_User = await ctx.prisma.business_User.findMany({
          where: {
            userId: parent.id,
          },
        });

        const businessIds: string[] = [];

        business_User.forEach(({ businessId }) => {
          businessIds.push(businessId);
        });

        return await ctx.prisma.business.findMany({
          where: {
            id: { in: businessIds },
          },
        });
      },
    });
  },
});
