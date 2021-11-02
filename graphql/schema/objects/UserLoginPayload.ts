import { objectType } from "nexus";

export const UserLoginPayload = objectType({
  name: "UserLoginPayload",
  definition(t) {
    t.field("user", {
      type: "User",
    });
    t.string("token");
  },
});
