import { BusinessName } from "../../components/Navbar/styles";
import { prisma } from "../../graphql/context/prisma";

export const testUser = {
  firstName: "FirstName",
  lastName: "LastName",
  email: "sample@email.com",
  password: "password",
  badPassword: "badPassword",
  areaCode: "407",
};

export const testBusiness = {
  name: "TestBusiness",
};

export const testCoupon = {
  title: "Test Coupon",
  message: "This is only a test coupon",
  expirationDate: "01012100",
  expirationTime: "0000AM",
};

export const cleanDatabase = async ( errorMessage: string ) => {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: testUser.email,
        }
      });
       const businesses = await prisma.business.findMany({
        where: {
          name: testBusiness.name,
        }
      });

      // Delete all Business_Users
      await prisma.business_User.deleteMany({
        where: {
          userId: user?.id,
        }
      });

      // Delete Users
      await prisma.user.deleteMany({
        where: {
          id: user?.id
        }
      });

      businesses.forEach(async business => {
        // Delete all coupons
        await prisma.coupon.deleteMany({
          where: {
            businessId: business?.id,
          }
        });

        // Delete all businesses
        await prisma.business.deleteMany({
          where: {
            id: business?.id,
          }
        })
      });
    } catch (error) {
      console.log(errorMessage);
    }
};