import { extendType, nonNull, stringArg } from "nexus";
import { AvailablePhoneNumber } from "../../objects";
import client from "../../../../lib/twilioClient";

export const provisionPhoneNumberMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("provisionPhoneNumber", {
      type: AvailablePhoneNumber,
      args: {
        phoneNumber: nonNull(stringArg()),
        businessId: nonNull(stringArg()),
      },
      resolve: async (_, { phoneNumber, businessId }, ctx) => {
        if (ctx.currentUser == null || ctx.currentUser.id == null)
          throw new Error("User is not logged in.");

        const businessUserRelation = await ctx.prisma.business_User.findMany({
          where: {
            user: {
              id: ctx.currentUser.id,
            },
            business: {
              id: businessId,
            },
            role: "OWNER" || "ADMIN",
          },
        });

        if (businessUserRelation == null)
          throw new Error("User cannot edit this business.");

        const response = await client.incomingPhoneNumbers.create({
          phoneNumber,
          smsUrl: "https://trism.co/api/sms/reply",
        });

        client.incomingPhoneNumbers.create;

        await ctx.prisma.business.update({
          where: {
            id: businessId,
          },
          data: {
            phoneNumber: response.phoneNumber,
          },
        });

        return {
          phoneNumber: response.phoneNumber,
          friendlyName: response.friendlyName,
        };
      },
    });
  },
});
