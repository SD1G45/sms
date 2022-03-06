import { compareSync } from "bcrypt";
import nodemailer from "nodemailer";
import { extendType, nonNull, stringArg } from "nexus";
import { generate } from "randomstring";

export const editEmailCode = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editEmailCode", {
      type: "Boolean",
      args: {
        id: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { id, email, password }, ctx) => {
        const code = generate(7);
        const user = await ctx.prisma.user.findFirst({
          where: {
            id,
            email,
          },
        });

        if (!user)
          throw new Error(
            "Unable to find current user information or user with that email"
          );
        else if (!compareSync(password, String(user.password)))
          throw new Error("Incorrect password, unable to update information");

        console.log("here");

        await ctx.prisma.emailResetCode.create({
          data: {
            value: code,
            email: email,
          },
        });

        const transporter = nodemailer.createTransport({
          host: "smtp.office365.com",
          port: 587,
          auth: {
            user: "no-reply@trism.co",
            pass: "sd1group45",
          },
        });

        await transporter.sendMail({
          from: `"Trism" <no-reply@trism.co>`,
          to: email,
          subject: "Trism account email change",
          html: `
                <p>
                  This email is being sent out because a change email link was requested from your Trism account. Go click the following link to change your accounts email: <a href="http://localhost:3001/settings/change-email/${code}>https://Trism.co/settings/change-email/${code}</a>
                </p> 
              `,
        });

        return true;
      },
    });
  },
});
