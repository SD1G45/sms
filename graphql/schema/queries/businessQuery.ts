import { extendType, nonNull, stringArg } from "nexus";

export const businessQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("business", {
      type: "Business",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, ctx) => {
        return await ctx.prisma.business.findFirst({
          where: {
            id,
          },
        });
      },
    });
  },
});
