import { objectType } from "nexus";

export const CustomerList = objectType({
  name: "CustomerList",
  definition(t) {
    t.string("id");
    t.string("name");
  },
});