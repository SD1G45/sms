import { extendType, nonNull, stringArg } from "nexus";

export const newCustomerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCustomer", {
      type: "Customer",
      args: {
        phoneNumber: nonNull(stringArg()),
      },
      resolve: async (_, phoneNumber, ctx) => {
        const newCustomer = await ctx.prisma.customer.create({
          data: {
            phoneNumber
          },
        });

        return newCustomer;
      }
    });
  },
});