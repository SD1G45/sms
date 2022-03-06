import { extendType, nonNull, stringArg } from "nexus";
import { EmailResetCode } from "../objects";

export const emailResetCodeQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("emailResetCode", {
      type: EmailResetCode,
      args: {
        value: nonNull(stringArg()),
      },
      resolve: async (_parent, { value }, ctx) => {
        return await ctx.prisma.emailResetCode.findUnique({
          where: { value },
        });
      },
    });
  },
});