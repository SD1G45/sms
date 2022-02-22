import { objectType, list } from "nexus";
import { Customer } from "./";

export const Customer_CustomerList = objectType({
  name: "Customer_CustomerList",
  definition(t) {
    t.string("id");
    t.string("customerId");
    t.string("customerListId");
    t.field("customer", {
      type: Customer,
      async resolve(parent, _args, ctx) {
        const customerId = String(parent.customerId);
        console.log(parent);
        const customer = await ctx.prisma.customer.findUnique({
          where: {
            id: customerId,
          },
        });
        console.log(customer);
        return customer;
      },
    });
  },
});
