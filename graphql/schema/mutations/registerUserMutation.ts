import { extendType, nonNull, stringArg } from "nexus";
import { generateJWTToken } from "../../auth";
import { hashSync } from "bcrypt";

export const registerUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("registerUser", {
      type: "UserLoginPayload",
      args: {
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { firstName, lastName, email, password }, ctx) => {
        var hashedPassword = hashSync(password, 10);

        const newRegisteredUser = await ctx.prisma.user.create({
          data: {
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: hashedPassword,
          },
        });

        const token = generateJWTToken({
          id: newRegisteredUser.id,
          email: email
        });

        return {
          token,
          user: newRegisteredUser,
        };
      },
    });
  },
});
