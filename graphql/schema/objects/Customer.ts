import { objectType } from "nexus";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.string("id");
    t.string("phoneNumber");
    t.string("firstName");
    t.string("lastName");
    t.string("password");
  },
});
