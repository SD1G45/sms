import { objectType } from "nexus";

export const AvailablePhoneNumber = objectType({
  name: "AvailablePhoneNumber",
  definition(t) {
    t.string("phoneNumber");
    t.string("friendlyName");
  },
});
