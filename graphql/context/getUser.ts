import { PrismaClient } from ".prisma/client";
import { config } from "../../config";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { JWT } from "../auth/generateJWTToken";

export const getUser = async (
  token: string | undefined,
  prisma: PrismaClient
) => {
  if (token) {
    const { ok, result } = await new Promise((resolve) =>
      jwt.verify(token, config.jwtSecret!, (err, result) => {
        if (err || !result) {
          resolve({
            ok: false,
            result: err,
          });
        } else {
          resolve({
            ok: true,
            result,
          });
        }
      })
    );

    if (ok) {
      const user = await prisma.user.findFirst({
        where: {
          id: result.id,
        },
      });

      return user;
    } else {
      return null;
    }
  }
  return null;
};
