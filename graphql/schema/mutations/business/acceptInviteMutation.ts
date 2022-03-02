import { extendType, nonNull, stringArg } from "nexus";

export const acceptInvitation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("acceptInvitation", {
      args: { code: nonNull(stringArg()) },
      type: "Boolean",
      resolve: async (_parent, { code }, ctx) => {
        if (ctx.currentUser == null) {
          throw new Error("User not logged in.");
        }

        const businessInviteCode =
          await ctx.prisma.businessInviteCode.findUnique({
            where: { value: code },
          });

        if (businessInviteCode == null) {
          throw new Error("Code doesn't exist");
        }

        if (businessInviteCode.email !== ctx.currentUser.email) {
          throw new Error("Emails don't match");
        }

        await ctx.prisma.business_User.create({
          data: {
            businessId: businessInviteCode.businessId,
            userId: ctx.currentUser.id,
            role: businessInviteCode.role,
          },
        });
        return true;
      },
    });
  },
});
