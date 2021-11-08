import { objectType } from "nexus";

export const Coupon = objectType({
    name: "Coupon",
    definition(t) {
        t.string("id");
        t.string("name");
        t.string("title");
        t.string("description");
        t.string("primaryColor");
        t.string("expirationDate");
        t.string("businessId");
    },
});