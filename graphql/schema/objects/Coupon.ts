import { objectType } from "nexus";

export const Coupon = objectType({
  name: "Coupon",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("title");
    t.string("description");
    t.string("primaryColor");
    t.date("expirationDate");
    t.string("businessId");
    t.int("opened");
    t.int("redeemed");
    t.int("sent");
  },
});
