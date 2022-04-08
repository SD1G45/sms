import { objectType } from "nexus";

export const Customer_Coupon = objectType({
  name: "Customer_Coupon",
  definition(t) {
    t.string("id");
    t.boolean("redeemed");
    t.boolean("opened");
    t.string("customerId");
    t.string("couponId");
  }
})