// TODO: support multiple customerListIds (should be passed an array of IDs)
import { prisma } from ".prisma/client";
import { extendType, nonNull, stringArg } from "nexus";
import client from "../../../../lib/twilioClient";

export const newCampaignMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newCampaign", {
      type: "Campaign",
      args: {
        name: nonNull(stringArg()),
        message: nonNull(stringArg()),
        couponId: nonNull(stringArg()),
        customerListId: nonNull(stringArg()),
        businessId: nonNull(stringArg()),
      },
      resolve: async (
        _,
        { name, message, couponId, customerListId, businessId },
        ctx
      ) => {
        const customer_List_Customer =
          await ctx.prisma.customer_List_Customer.findMany({
            where: {
              customerListId,
            },
          });

        const newCampaign = await ctx.prisma.campaign.create({
          data: {
            name,
            message,
            dateSent: new Date(),
            messagesSent: customer_List_Customer.length,
            couponsOpened: 0,
            couponsRedeemed: 0,
            couponId,
            businessId,
          },
        });

        await ctx.prisma.campaign_Customer_List.create({
          data: {
            campaignId: newCampaign.id,
            customerListId: customerListId,
          },
        });

        const business = await ctx.prisma.business.findUnique({
          where: {
            id: businessId,
          },
        });

        const businessPhoneNumber = business?.phoneNumber;

        // TODO: move this to a serverless function on aws.
        customer_List_Customer.forEach(async (list) => {
          const customer = await ctx.prisma.customer.findUnique({
            where: {
              id: list.customerId,
            },
          });

          if (!customer) {
            return;
          }

          const customer_Coupon = await ctx.prisma.customer_Coupon.create({
            data: {
              customerId: customer?.id,
              couponId: couponId,
              redeemed: false,
              opened: false,
            },
          });

          const customerPhoneNumber = customer?.phoneNumber;

          const messageWithCoupon = `${message} https://trism.co/reward/${customer_Coupon.id}`;

          await client.messages.create({
            body: messageWithCoupon,
            from: businessPhoneNumber,
            to: customerPhoneNumber,
          });
        });

        return newCampaign;
      },
    });
  },
});
