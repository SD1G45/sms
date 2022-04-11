import { extendType, nonNull, stringArg } from "nexus";
import { Customer as CustomerType } from "../../objects";
import { Customer } from "@prisma/client";

export const addCustomerInfoMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addCustomerInfoMutation", {
      type: "Customer",
      args: {
        customerId: nonNull(stringArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
      },
      resolve: async (_, { customerId, firstName, lastName }, ctx) => {
        const user = await ctx.prisma.customer.findFirst({
          where: {
            id: customerId,
          },
        });

        if (user == null) throw new Error("Unable to find customer");

        return ctx.prisma.customer.update({
          where: {
            id: customerId,
          },
          data: {
            firstName,
            lastName,
          },
        });
      },
    });
  },
});
