import { extendType, list, nonNull, stringArg } from "nexus";
import { User } from "../objects";
import { UserBusinessRole } from "../objects/UserBusinessRole";

export const usersForBusinessQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("usersForBusiness", {
      type: list(User),
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
        const test = ctx.prisma.user.findMany({
          where: {
            id: { in: userIds },
          },
        });
        const users = await ctx.prisma.user.findMany({
          where: {
            id: { in: userIds },
          },
        });

        const data: string[][] = [];
        for (let i = 0; i < business_User.length; i++) {
          const curr = users[i];
          if (curr.id == business_User[i].userId) {
            data.push([
              curr.id,
              curr.firstName,
              curr.lastName,
              business_User[i].role,
            ]);
          }
        }

        console.log("User data + Business Role: ");
        console.log(data);

        return await data;
      },
    });
  },
});
