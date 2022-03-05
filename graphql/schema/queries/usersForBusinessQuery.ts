import { extendType, list, nonNull, stringArg } from "nexus";
import { User } from "../objects";
import { UserBusinessRole } from "../objects/UserBusinessRole";

export const usersForBusinessQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("usersForBusiness", {
      type: list(UserBusinessRole),
      args: {
        businessId: nonNull(stringArg()),
      },

      resolve: async (_, { businessId }, ctx) => {
        const business_User = await ctx.prisma.business_User.findMany({
          where: {
            businessId,
          },
        });

        const userIds: string[] = [];

        business_User.forEach(({ userId }) => {
          userIds.push(userId);
        });

        const users = await ctx.prisma.user.findMany({
          where: {
            id: { in: userIds },
          },
        });

        const map: any = {};
        users.forEach((user) => {
          map[user.id] = { ...user };
        });

        const test = business_User.map(({ userId, role }) => {
          return {
            user: map[userId],
            role,
          };
        });

        return test;
      },
    });
  },
});
