import { objectType } from "nexus";

export const Business = objectType({
  name: "Business",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("stripeId");
    t.string("phoneNumber");
    t.string("logoUrl");
  },
});