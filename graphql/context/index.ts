import { prisma } from "./prisma";
import { PrismaClient, User } from "@prisma/client";
import { getUser } from "./getUser";
import { NextApiRequest } from "next";

export interface Context {
  prisma: PrismaClient;
  currentUser: User | null;
}

export const context = async ({ req }: { req: NextApiRequest }) => {
  const currentUser = await getUser(req.cookies.token, prisma);
  return {
    prisma,
    currentUser,
  };
};
