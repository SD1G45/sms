import { objectType } from "nexus";

export const Keyword = objectType({
  name: "Keyword",
  definition(t) {
    t.string("id");
    t.string("keyword");
    t.string("description");
    t.date("dateCreated");
    t.field("keyWordCustomerList", { type: "KeyWord_CustomerList" });
  },
});
