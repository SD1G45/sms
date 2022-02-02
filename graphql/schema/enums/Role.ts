import { enumType } from "nexus";

export const Role = enumType({
  name: "Role",
  members: ["OWNER", "ADMIN", "EDITOR", "VIEWER"],
});
