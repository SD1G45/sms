import { Customer } from "@prisma/client";
import { extendType, list, nonNull, stringArg } from "nexus";
import { context } from "../../context";
import { Customer as CustomerType } from "../objects";

export const customerByPhoneNumberQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("customerByPhonenumber", {
      type: CustomerType,
      args: {
        phoneNumber: nonNull(stringArg()),
      },
      resolve: async (_, { phoneNumber }, ctx) => {
        const customer = await ctx.prisma.customer.findUnique({
          where: {
            phoneNumber,
          },
        });

        if (customer == null) {
          throw new Error("Found no customer with that phone number");
        }

        return customer;
      },
    });
  },
});
