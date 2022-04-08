import { extendType, nonNull, stringArg } from "nexus";
import client from "../../../lib/twilioClient";

export const businessMessageCountQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("messageCount", {
      type: "Int",
      args: {
        businessId: nonNull(stringArg()),
      }, 
      resolve: async (_, { businessId }, ctx) => {
        const business = await ctx.prisma.business.findFirst({
          where: {
            id: businessId,
          }
        });

        if (business == null) {
          throw new Error("Could not find business");
        } else if (business.phoneNumber == null) {
          throw new Error("Business has not yet provisioned a phone number");
        }
        
        const response = await client.messages.list({
          from: business.phoneNumber
        });

        return response.messages.count;
      },
    })
  }
});