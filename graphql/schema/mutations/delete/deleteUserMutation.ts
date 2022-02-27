import { extendType, nonNull, stringArg } from "nexus";

export const deleteUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("deleteUser", {
      type: "User",
      args: {
        email: nonNull(stringArg()),
      },
      resolve: async (_, { email }, ctx) => {
        const userBasedOnEmail = await ctx.prisma.user.findFirst({
          where: {
            email: email.toLowerCase(),
          },
        });

        if (userBasedOnEmail == null) {
          throw new Error("A user with this email or password doesn't exist");
        }

        try {
          const { email } = userBasedOnEmail;

          const deletedUser = await ctx.prisma.user.delete({
            where: {
              email
            }
          });

          return {
            user: deletedUser,
          };
        } catch(e: any) {
          console.log(e);
          throw new Error(e);
        }
      }, 
    });
  },
});