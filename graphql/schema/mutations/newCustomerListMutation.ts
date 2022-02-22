import { extendType, nonNull, stringArg } from "nexus";

export const newCustomerListMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCustomerList", {
      type: "CustomerList",
      args: {
        name: nonNull(stringArg()),
        businessId: nonNull(stringArg()),
        description: stringArg(),
      },
      resolve: async (_, { name, businessId, description }, ctx) => {
        const newCustomerList = await ctx.prisma.customer_List.create({
          data: {
            name,
            businessId,
            description,
          },
        });

        return newCustomerList;
      },
    });
  },
});
