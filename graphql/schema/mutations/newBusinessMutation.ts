import { extendType, nonNull, stringArg } from "nexus";

export const newBusinessMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newBusiness", {
      type: "Business",
      args: {
        name: nonNull(stringArg()),
        stripeId: nonNull(stringArg()),
        phoneNumber: nonNull(stringArg()),
        logoUrl: nonNull(stringArg()),
      }, 
      resolve: async (
        _,
        { name, stripeId, phoneNumber, logoUrl },
        ctx
      ) => {
        const newBusiness = await ctx.prisma.business.create({
          data: {
            name,
            stripeId,
            phoneNumber,
            logoUrl,
          }
        });

        return newBusiness
      },
    });
  },
});