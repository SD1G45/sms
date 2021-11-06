import { extendType, nonNull, stringArg } from "nexus";

export const newBusinessMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newBusiness", {
      type: "Business",
      args: {
        name: nonNull(stringArg()),
      },
      resolve: async (_, { name }, ctx) => {
        if (ctx.currentUser == null || ctx.currentUser.id == null)
          throw new Error("User is not logged in.");

        const newBusiness = await ctx.prisma.business.create({
          data: {
            name,
            users: {
              create: [
                {
                  role: "OWNER",
                  user: {
                    connect: {
                      id: ctx.currentUser.id,
                    },
                  },
                },
              ],
            },
          },
        });

        return newBusiness;
      },
    });
  },
});
