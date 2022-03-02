import { objectType, list } from "nexus";

export const CustomerList = objectType({
  name: "CustomerList",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("description");
    t.int("count", {
      async resolve(parent, _args, ctx) {
        const customerListID = String(parent.id);
        const numCustomers = await ctx.prisma.customer_List_Customer.count({
          where: {
            customerListId: customerListID,
          },
        });
        return numCustomers;
      },
    });
  },
});
