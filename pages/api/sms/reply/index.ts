import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../graphql/context/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);

    const businessPhoneNumber = req.body.To;

    const businessWithPhoneNumber = await prisma.business.findUnique({
      where: {
        phoneNumber: businessPhoneNumber,
      },
    });

    if (businessWithPhoneNumber == null) {
      return res
        .status(404)
        .send("A business with this phone number doesn't exist.");
    }

    const textBody = req.body.Body;

    const keyword = await prisma.keyword.findFirst({
      where: { keyword: textBody, businessId: businessWithPhoneNumber.id },
    });

    if (keyword == null) {
      return res.status(404).send("This keyword doesn't exist.");
    }

    const customerPhoneNumber = req.body.From;

    const customerWithPhoneNumber = await prisma.customer.findUnique({
      where: { phoneNumber: customerPhoneNumber },
    });

    // If customer doesn't exist, create a new customer.

    // Get customer list for keyword and add customer to all of them.

    // Send appropriate autoresponse for keyword.

    return res.send(200);
  }
}
