import { extendType, nonNull, stringArg } from "nexus";


export const editUserEmailMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editUserEmailMutation", {
      type: "Boolean",
      args: {
        code: nonNull(stringArg()),
        newEmail: nonNull(stringArg()),
      },
      resolve: async (_, { code, newEmail }, ctx) => {
        const emailReset = await ctx.prisma.emailResetCode.findFirst({
          where: {
            value: code,
            email: newEmail
          },
        });
        if (!emailReset) {
          throw new Error("Unable to find that code");
        }

        const customerId = emailReset.customerId;
        await ctx.prisma.user.update({
          where: {
            id: customerId,
          }, 
          data: {
            email: newEmail
          }
        });

        await ctx.prisma.emailResetCode.delete({
          where: {
            value: code
          }
        })
        return true;
      },
    });
  },
});
