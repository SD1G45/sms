import { objectType } from "nexus";

export const EmailResetCode = objectType({
  name: "EmailResetCode",
  definition(t) {
      t.string("email");
      t.string("customerId");
  }
});