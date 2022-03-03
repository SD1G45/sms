import { extendType, list, nonNull, stringArg } from "nexus";
import { User } from "../objects";

export const businessUsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("businessUsers", {
      type: list(User),
      args: {
        businessId: nonNull(stringArg()),
      },
      resolve: async (_, { businessId }, ctx) => {
        const businessUsers = await ctx.prisma.business_User.findMany({
          where: {
            businessId,
          },
        });

        if (businessUsers.length == 0) {
          throw new Error("No users assigned to business.");
        }

        var users: any[] = [];
        businessUsers.forEach(businessUser => {
          const user = ctx.prisma.user.findFirst({
            where: {
              id: businessUser.userId,
            }
          });

          if (user == null) {
            throw new Error("User not found");
          }

          users.push(user);
        });

        return users;
      },
    });
  },
});
