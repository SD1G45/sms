import { extendType, list, nonNull, stringArg } from "nexus";
import { Customer_CustomerList } from "../objects";

export const customerListCustomerQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("customerListCustomers", {
      type: list(Customer_CustomerList),
      args: {
        customerListId: nonNull(stringArg()),
      },
      resolve: async (_, { customerListId }, ctx) => {
        return await ctx.prisma.customer_List_Customer.findMany({
          where: {
            customerListId,
          },
        });
      },
    });
  },
});