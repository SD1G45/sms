import { extendType, nonNull, stringArg } from "nexus";
import { config } from "../../../../config";
export const newBusinessMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newBusiness", {
      type: "Business",
      args: {
        name: nonNull(stringArg()),
      },
      resolve: async (_, { name }, ctx) => {
        if (ctx.currentUser == null || ctx.currentUser.id == null)
          throw new Error("User is not logged in.");

        // Add customer to stripe
        const stripe = require("stripe")(config.stripe_sk);
        const customer = await stripe.customers.create({
          description: "SMS Customer",
          name: name,
        });
        const stripeId = customer["id"];
        const newBusiness = await ctx.prisma.business.create({
          data: {
            name,
            stripeId: stripeId,
            users: {
              create: [
                {
                  role: "OWNER",
                  user: {
                    connect: {
                      id: ctx.currentUser.id,
                    },
                  },
                },
              ],
            },
          },
        });

        return newBusiness;
      },
    });
  },
});
