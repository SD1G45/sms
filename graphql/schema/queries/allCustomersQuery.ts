import { Customer } from "@prisma/client";
import { extendType, list, nonNull, stringArg } from "nexus";
import { Customer as CustomerType } from "../objects";

export const allCustomersQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("allCustomers", {
      type: list(CustomerType),
      args: {
        businessId: nonNull(stringArg()),
      },
      resolve: async (_, { businessId }, ctx) => {
        const customerLists = await ctx.prisma.customer_List.findMany({
          where: {
            businessId
          }
        });

        if (customerLists == null) {
          throw new Error("Found no customers lists for business");
        }

        const customers: Customer[] = [];
        await Promise.all(customerLists.map( async (customerList) => {
          const customerListCustomers = await ctx.prisma.customer_List_Customer.findMany({
            where: {
              customerListId: customerList.id,
            }
          });

          await Promise.all(customerListCustomers.map( async (customerListCustomer) => {
            const customer = await ctx.prisma.customer.findUnique({
              where: {
                id: customerListCustomer.customerId,
              }
            });

            if (customer == null) {
              throw new Error("No customer found");
            }
            
            customers.push(customer);
          }));
        }));

        return customers;
      },
    });
  }
});