import { objectType } from "nexus";

export const KeyWord_CustomerList = objectType({
  name: "KeyWord_CustomerList",
  definition(t) {
    t.string("id");
    t.string("customer_list_id");
    t.string("keyword_id");
  },
});
