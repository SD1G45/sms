import { objectType } from "nexus";

export const Campaign = objectType({
  name: "Campaign", 
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("message");
    t.string("couponId");
    t.field("customers", { type: "CustomerList" });
  },
});