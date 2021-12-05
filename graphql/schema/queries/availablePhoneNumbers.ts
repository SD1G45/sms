import { extendType, list, nonNull, stringArg } from "nexus";
import client from "../../../lib/twilioClient";
import { AvailablePhoneNumber } from "../objects";

export const availablePhoneNumbersQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("availablePhoneNumbers", {
      type: list(AvailablePhoneNumber),
      args: {
        areaCode: nonNull(stringArg()),
      },
      resolve: async (_, { areaCode }, ctx) => {
        const response = await client
          .availablePhoneNumbers("US")
          .local.list({ areaCode, limit: 20 });

        return response.map((twilioPhoneData: any) => {
          return {
            phoneNumber: twilioPhoneData.phoneNumber,
            friendlyName: twilioPhoneData.friendlyName,
          };
        });
      },
    });
  },
});
