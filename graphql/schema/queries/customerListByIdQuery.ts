import { extendType, list, nonNull, stringArg } from "nexus";
import { CustomerList } from "../objects";

export const customerListByIdQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("customerList", {
      type: list(CustomerList),
      args: {
        customerListId: nonNull(stringArg()),
      },
      resolve: async (_, { customerListId }, ctx) => {
        return await ctx.prisma.customer_List.findMany({
          where: {
            id: customerListId,
          },
        });
      },
    });
  },
});
