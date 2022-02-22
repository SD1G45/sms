import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../graphql/context/prisma";
import client from "../../../../lib/twilioClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
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

    let customerWithPhoneNumber = await prisma.customer.findUnique({
      where: { phoneNumber: customerPhoneNumber },
    });

    if (customerWithPhoneNumber == null) {
      customerWithPhoneNumber = await prisma.customer.create({
        data: {
          phoneNumber: customerPhoneNumber,
        },
      });
    }

    const keyword_Customer_List = await prisma.keyword_Customer_List.findFirst({
      where: { keyword },
    });

    if (keyword_Customer_List == null) {
      return res
        .status(404)
        .send("Keyword doesn't have a customer list attached");
    }

    const customerListId = keyword_Customer_List.customerListId;

    await prisma.customer_List_Customer.create({
      data: {
        customerListId,
        customerId: customerWithPhoneNumber.id,
      },
    });

    const link =
      process.env.ROOT_URL +
      keyword.couponId +
      "?customer=" +
      customerPhoneNumber;

    const messageWithLink = keyword.message.replace("{coupon}", link);

    console.log(messageWithLink);

    await client.messages.create({
      body: messageWithLink,
      from: businessPhoneNumber,
      to: customerPhoneNumber,
    });

    return res.send(200);
  }
}
