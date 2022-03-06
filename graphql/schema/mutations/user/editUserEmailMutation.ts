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
        const user = await ctx.prisma.emailResetCode.findFirst({
          where: {
            value: code
          },
        });

        if (user == null)
          throw new Error(
            "Unable to find current user information or user with that email"
          );

        await ctx.prisma.user.update({
          where: {
            email: String(user.email),
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
