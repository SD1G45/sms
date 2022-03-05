import { objectType } from "nexus";

export const UserBusinessRole = objectType({
  name: "UserBusinessRole",
  definition(t) {
    t.field("user", {
      type: "User",
    });
    t.string("role");
  },
});
