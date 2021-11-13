import { objectType } from "nexus";

export const KeyWordCustomerList = objectType({
  name: "KeyWordCustomerList",
  definition(t) {
    t.string("id");
    t.string("customer_list_id");
    t.string("keyword_id");
  },
});
