import { objectType, list } from "nexus";
import { Customer } from "./";

export const Customer_CustomerList = objectType({
  name: "Customer_CustomerList",
  definition(t) {
    t.string("id");
    t.string("name", {
      async resolve(parent, _args, ctx) {
        const customerListId = String(parent.customerListId);
        const customer_list = await ctx.prisma.customer_List.findUnique({
          where: {
            id: customerListId,
          }
        });
        return customer_list?.name || "[NAME]";
      }
    })
    t.string("customerId");
    t.string("customerListId");
    t.field("customer", {
      type: Customer,
      async resolve(parent, _args, ctx) {
        const customerId = String(parent.customerId);
        const customer = await ctx.prisma.customer.findUnique({
          where: {
            id: customerId,
          },
        });
        return customer;
      },
    });
  },
});
