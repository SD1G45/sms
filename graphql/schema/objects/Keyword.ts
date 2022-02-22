import { objectType } from "nexus";

export const Keyword = objectType({
  name: "Keyword",
  definition(t) {
    t.string("id");
    t.string("keyword");
    t.string("description");
    t.int("customersOnboarded");
    t.int("couponsOpened");
    t.int("couponsRedeemed");
    t.date("dateCreated");
    t.field("keyWordCustomerList", { type: "KeyWord_CustomerList" });
  },
});
