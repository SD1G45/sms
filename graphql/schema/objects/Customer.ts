import { objectType } from "nexus";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.string("id");
    t.string("phoneNumber");
    t.string("keywordId");
    t.string("couponId");
    t.string("firstName");
    t.string("lastName");
    t.date("onboardDate");
  },
});
