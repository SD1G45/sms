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
      },
      resolve: async (_, { phoneNumber }, ctx) => {
        const response = await client.incomingPhoneNumbers.create({
          phoneNumber,
        });

        return {
          phoneNumber: response.phoneNumber,
          friendlyName: response.friendlyName,
        };
      },
    });
  },
});
