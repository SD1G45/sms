import { extendType, nonNull, stringArg } from "nexus";

export const newCustomerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCustomer", {
      type: "Customer",
      args: {
        phoneNumber: nonNull(stringArg()),
        keywordId: nonNull(stringArg()),
        couponId: nonNull(stringArg()),
      },
      resolve: async (_, { phoneNumber, keywordId, couponId }, ctx) => {
        let customerWithPhoneNumber = await ctx.prisma.customer.findUnique({
          where: { phoneNumber },
        });
    
        if (customerWithPhoneNumber == null) {
          customerWithPhoneNumber = await ctx.prisma.customer.create({
            data: {
              phoneNumber
            },
          });
        }
    
        const keyword_CustomerList = await ctx.prisma.keyword_Customer_List.findFirst({
          where: { keywordId },
        });
    
        if (keyword_CustomerList == null) {
          new Error("Keyword is not attached to a customer list");
        }
    
        const customerListId = keyword_CustomerList!.customerListId;
    
        await ctx.prisma.customer_List_Customer.create({
          data: {
            customerListId,
            customerId: customerWithPhoneNumber.id,
          },
        });
    
        const customer_Coupon = await ctx.prisma.customer_Coupon.create({
          data: {
            customerId: customerWithPhoneNumber?.id,
            couponId,
            redeemed: false,
            opened: false,
          },
        });

        return customerWithPhoneNumber;
      }
    });
  },
});