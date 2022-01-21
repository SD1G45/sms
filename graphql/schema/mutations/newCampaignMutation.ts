// TODO: support multiple customerListIds (should be passed an array of IDs)
import { prisma } from ".prisma/client";
import { extendType, nonNull, stringArg } from "nexus";
import client from "../../../lib/twilioClient";

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
        const newCampaign = await ctx.prisma.campaign.create({
          data: {
            name,
            message,
            couponId,
          },
        });

        await ctx.prisma.campaign_Customer_List.create({
          data: {
            campaignId: newCampaign.id,
            customerListId: customerListId,
          },
        });

        const customer_List_Customer =
          await ctx.prisma.customer_List_Customer.findMany({
            where: {
              customerListId,
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
          const customerPhoneNumber = customer?.phoneNumber;
          await client.messages.create({
            body: message,
            from: businessPhoneNumber,
            to: customerPhoneNumber,
          });
        });

        return newCampaign;
      },
    });
  },
});
