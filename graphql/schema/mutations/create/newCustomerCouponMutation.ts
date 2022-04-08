import { extendType, nonNull, stringArg } from "nexus";

export const newCustomerCouponMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCustomerCoupon", {
      type: "Customer_Coupon",
      args: {
        couponId: nonNull(stringArg()),
        customerId: nonNull(stringArg()),
      },
      resolve: async (
        _, { couponId, customerId}, ctx
      ) => {
        const newCustomerCoupon = await ctx.prisma.customer_Coupon.create({
          data: {customerId,
          couponId,
          redeemed: false,
          opened: false
        }})
        return newCustomerCoupon;
      }
    })
  }
})