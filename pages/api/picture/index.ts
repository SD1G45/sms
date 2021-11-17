import { NextApiRequest, NextApiResponse } from "next";
import AWS, { S3 } from "aws-sdk";
import { getUser } from "../../../graphql/context/getUser";
import { prisma } from "../../../graphql/context/prisma";
import sharp from "sharp";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const token = req.cookies.token;
    if (token === undefined) {
      return res.status(401).json({ message: "Missing JWT token" });
    }

    const base64 = req.body.base64;
    const businessId = req.body.businessId;

    if (base64 === undefined) {
      return res.status(400).json({ message: "Missing base64 param" });
    }

    if (businessId === undefined) {
      return res.status(400).json({ message: "Missing businessId param" });
    }

    const currentUser = await getUser(token, prisma);
    if (currentUser == null) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const businessUserRelation = await prisma.business_User.findMany({
      where: {
        user: {
          id: currentUser.id,
        },
        business: {
          id: businessId,
        },
        role: "OWNER" || "ADMIN" || "EDITOR",
      },
    });

    if (businessUserRelation == null) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const s3 = new S3();

    const awsAccessKey = process.env.AWS_ACCESS_KEY;
    const awsSecretKey = process.env.AWS_SECRET_KEY;
    const awsBucketName = process.env.AWS_BUCKET_NAME;

    AWS.config.setPromisesDependency(require("bluebird"));
    AWS.config.update({
      accessKeyId: awsAccessKey,
      secretAccessKey: awsSecretKey,
      region: "us-east-1",
    });

    const base64Data = Buffer.from(
      base64.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    const compressedImageBuffer = await sharp(base64Data)
      .resize({
        width: 200,
        height: 200,
        fit: "cover",
      })
      .toBuffer();

    const type = base64.split(";")[0].split("/")[1];

    const params = {
      Bucket: awsBucketName || "",
      Key: `${businessId}.${type}`, // type is not required
      Body: compressedImageBuffer,
      ACL: "public-read",
      ContentEncoding: "base64", // required
      ContentType: `image/${type}`, // required. Notice the back ticks
    };

    let location = "";
    try {
      const { Location } = await s3.upload(params).promise();
      location = Location;

      await prisma.business.update({
        where: {
          id: businessId,
        },
        data: {
          logoUrl: location,
        },
      });

      return res.status(200).json({ imageUri: location });
    } catch (error) {
      return res.status(500).send("Error");
    }
  } else {
    return res.status(200).json({ ok: true });
  }
}
