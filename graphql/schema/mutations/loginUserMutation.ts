import { extendType, nonNull, stringArg } from "nexus";
import { compareSync } from "bcrypt";
import { generateJWTToken } from "../../auth";

export const loginUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("loginUser", {
      type: "UserLoginPayload",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { email, password }, ctx) => {
        const userBasedOnEmail = await ctx.prisma.user.findFirst({
          where: {
            email: email.toLowerCase(),
          },
        });

        if (userBasedOnEmail == null) {
          throw new Error("A user with this email or password doesn't exist");
        }

        try {
          const validPassword = compareSync(password, userBasedOnEmail?.password);
  
          if (validPassword) {
            const { id, email } = userBasedOnEmail;
            const token = generateJWTToken({
              id,
              email
            });
  
            return {
              token,
              user: userBasedOnEmail,
            };
          } else {
            throw new Error("The email or password is incorrect");
          }
        } catch(e: any) {
          console.log(e);
          throw new Error(e);
        }
      }, 
    });
  },
});
