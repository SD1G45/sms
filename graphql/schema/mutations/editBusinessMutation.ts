import { extendType, nonNull, stringArg } from "nexus";

export const editBusinessMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editBusiness", {
      type: "Business",
      args: {
        id: nonNull(stringArg()),
        name: nonNull(stringArg()),
      },
      resolve: async (_, { id, name }, ctx) => {
        if (ctx.currentUser == null || ctx.currentUser.id == null)
          throw new Error("User is not logged in.");

        const businessUserRelation = await ctx.prisma.business_User.findMany({
          where: {
            user: {
              id: ctx.currentUser.id,
            },
            business: {
              id,
            },
            role: "OWNER" || "ADMIN",
          },
        });

        if (businessUserRelation == null)
          throw new Error("User cannot edit this business.");

        return ctx.prisma.business.update({
          where: {
            id,
          },
          data: {
            name,
          },
        });
      },
    });
  },
});
