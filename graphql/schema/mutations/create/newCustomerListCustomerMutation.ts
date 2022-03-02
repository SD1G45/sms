import { extendType, nonNull, stringArg } from "nexus";

export const newCustomerListCustomerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCustomerListCustomer", {
      type: "Customer_CustomerList",
      args: {
        customerId: nonNull(stringArg()),
        customerListId: nonNull(stringArg()),
      },
      resolve: async (_, { customerId, customerListId }, ctx) => {
        const newCustomerListCustomer =
          await ctx.prisma.customer_List_Customer.create({
            data: {
              customerId,
              customerListId,
            },
          });
        return newCustomerListCustomer;
      },
    });
  },
});
