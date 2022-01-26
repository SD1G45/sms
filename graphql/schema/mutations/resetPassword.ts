import { compareSync, hashSync } from "bcrypt";
import { extendType, nonNull, stringArg } from "nexus";
export const resetPasswordMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("resetPassword", {
      type: "User",
      args: {
        oldPassword: nonNull(stringArg()),
        newPassword: nonNull(stringArg()),
      },
      resolve: async (_, { oldPassword, newPassword }, ctx) => {
        if (ctx.currentUser == null || ctx.currentUser.id == null)
          throw new Error("User is not logged in.");

        const user = await ctx.prisma.user.findFirst({
          where: {
            id: ctx.currentUser.id,
          },
        });

        if (user == null) {
          throw new Error("User does not exist");
        }
        try {
          const validPassword = compareSync(oldPassword, user.password);
          if (validPassword) {
            var hashedPassword = hashSync(newPassword, 10);
            console.log("test");
            return ctx.prisma.user.update({
              where: {
                id: ctx.currentUser.id,
              },
              data: {
                password: hashedPassword,
              },
            });
          } else {
            return "User Not found";
          }
        } catch (e) {
          throw new Error("Invalid Password");
        }
      },
    });
  },
});
