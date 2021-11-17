import { objectType } from "nexus";

export const Customer_CustomerList = objectType({
  name: "Customer_CustomerList",
  definition(t) {
    t.string("id");
    t.string("customer_id");
    t.string("customer_list_id");
  },
});