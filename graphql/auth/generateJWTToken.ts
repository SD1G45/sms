import { config } from "../../config";
import jwt from "jsonwebtoken";

export interface JWT {
  id: string;
  username: string;
  email: string;
  exp: Date;
}

export function generateJWTToken(user: {
  id: string;
  email: string;
  username: string;
}) {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      exp: exp.getTime() / 1000,
    },
    config.jwtSecret!
  );
}
