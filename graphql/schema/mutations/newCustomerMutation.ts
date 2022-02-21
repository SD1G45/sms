import { extendType, nonNull, stringArg } from "nexus";

/*
  This Mutation was created by Walter for testing purposes
*/

export const newCustomerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCustomer", {
      type: "Customer",
      args: {
        phoneNumber: nonNull(stringArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { phoneNumber, firstName, lastName, password }, ctx) => {
        const newCustomer = await ctx.prisma.customer.create({
          data: {
            phoneNumber,
            firstName,
            lastName,
            password,
          },
        });

        return newCustomer;
      }
    });
  },
});