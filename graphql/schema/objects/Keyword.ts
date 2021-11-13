import { objectType } from "nexus";

export const Keyword = objectType({
  name: "Keyword",
  definition(t) {
    t.string("id");
    t.string("keyword");
    t.string("description");
    t.field("keyWordCustomerList", { type: "KeyWordCustomerList" });
  },
});
