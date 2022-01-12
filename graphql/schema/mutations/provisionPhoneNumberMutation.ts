import { extendType, nonNull, stringArg } from "nexus";
import { AvailablePhoneNumber } from "../objects";
import client from "../../../lib/twilioClient";

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

        // TODO: Uncomment when we start paying for Twilio

        // const response = await client.incomingPhoneNumbers.create({
        //   phoneNumber,
        // });
        // return {
        //   phoneNumber: response.phoneNumber,
        //   friendlyName: response.friendlyName,
        // };

        const result = await ctx.prisma.business.update({
          where: {
            id: businessId,
          },
          data: {
            // TODO: This value is hardcoded while we're not paying
            phoneNumber: "+14075841037",
          },
        });
        console.log(result);

        // TODO: Hardcoded
        return {
          phoneNumber: "+14075841037",
          friendlyName: "(407) 584-1037",
        };
      },
    });
  },
});
