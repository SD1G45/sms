import { compareSync } from "bcrypt";
import { extendType, nonNull, stringArg } from "nexus";

export const editUserMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editUser", {
      type: "User",
      args: {
        id: nonNull(stringArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { id, firstName, lastName, email, password }, ctx) => {
        const user = await ctx.prisma.user.findFirst({
            where: {
              id
            },
          });

        if (user == null) 
            throw new Error("Unable to find current user information");
        else if (!compareSync(password, String(user.password))) 
            throw new Error("Incorrect password, unable to update information");
        
        return ctx.prisma.user.update({
            where: {
                id
            },
            data: {
                firstName,
                lastName,
                email,
            }
        })

      },
    });
  },
});
