import { extendType, nonNull, stringArg } from "nexus";
import nodemailer from "nodemailer";
import { generate } from "randomstring";
import { Role } from "../enums";

export const inviteAccount = extendType({
  type: "Mutation",
  definition(t) {
    t.field("inviteAccount", {
      type: "Boolean",
      args: {
        email: nonNull(stringArg()),
        role: nonNull(Role),
        businessId: nonNull(stringArg()),
      },
      resolve: async (_, { email, role, businessId }, ctx) => {
        const code = generate(7);

        const businessInviteCode = await ctx.prisma.businessInviteCode.create({
          data: {
            value: code,
            email,
            businessId,
            role,
          },
        });

        const testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          auth: {
            user: "a526shunypohcthz@ethereal.email",
            pass: "ydmVu2At5EscmCSBJD",
          },
        });

        const info = await transporter.sendMail({
          from: `"Trism" <a526shunypohcthz@ethereal.email>`, // sender address
          to: email, // list of receivers
          subject: "Password reset on www.bytetag.co", // Subject line
          html: `<p>You're receiving this e-mail because you requested a password reset for your user account at ByteTag.</p><p>Please go to the following page and choose a new password: <a href="https://www.trism.co/business/join/${code}">https://www.trism.co/busienss/join/${code}</a></p>`,
        });

        console.log(code);

        return true;
      },
    });
  },
});
