import { extendType, nonNull, stringArg } from "nexus";
import { BusinessInviteCode } from "../objects";

export const businessInviteCodeQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("businessInviteCode", {
      type: BusinessInviteCode,
      args: {
        value: nonNull(stringArg()),
      },
      resolve: async (_parent, { value }, ctx) => {
        return await ctx.prisma.businessInviteCode.findUnique({
          where: { value },
        });
      },
    });
  },
});
