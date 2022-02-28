import { extendType, nonNull, stringArg } from "nexus";
import nodemailer from "nodemailer";
import { generate } from "randomstring";
import { Role } from "../../enums";

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

        const business = await ctx.prisma.business.findUnique({
          where: {
            id: businessId,
          },
        });

        if (!business) {
          throw new Error("Business does not exist.");
        }

        const businessInviteCode = await ctx.prisma.businessInviteCode.create({
          data: {
            value: code,
            email,
            businessId,
            role,
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

        const info = await transporter.sendMail({
          from: `"Trism" <no-reply@trism.co>`, // sender address
          to: email, // list of receivers
          subject: `You've been invited to join ${business.name} at Trism.co`, // Subject line
          html: `<p>You're receiving this e-mail because you have been invited to join ${business.name} at Trism.</p><p>Please go to the following page to join: <a href="https://www.trism.co/business/join/${code}">https://www.trism.co/business/join/${code}</a></p>`,
        });

        return true;
      },
    });
  },
});
