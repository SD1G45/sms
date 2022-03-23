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
  number: "+15005550006"
};

export const testCustomerList = {
  name: "Test Customer List",
  description: "This is only a test customer list"
}

export const testCoupon = {
  title: "Test Coupon",
  message: "This is only a test coupon",
  expirationDate: "01012100",
  expirationTime: "0000AM",
};

export const testKeyword = {
  keyword: "Test Keyword",
  autoResponse: "Auto Response for Test Keyword",
  description: "Description for Test Keyword",
}

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

      // Delete everything associated with Businesses
      businesses.forEach(async business => {
        const customerLists = await prisma.customer_List.findMany({
          where: {
            businessId: business?.id,
          }
        });

        // Delete everything associated with CustomerLists
        customerLists.forEach(async list => {
          await prisma.keyword_Customer_List.deleteMany({
            where: {
              customerListId: list?.id,
            }
          });

          await prisma.campaign_Customer_List.deleteMany({
            where: {
              customerListId: list?.id,
            }
          });

          await prisma.customer_List.delete({
            where: {
              id: list?.id
            }
          })
        });

        // Delete all keywords
        await prisma.keyword.deleteMany({
          where: {
            businessId: business?.id,
          }
        });

        // Delete all coupons
        await prisma.coupon.deleteMany({
          where: {
            businessId: business?.id,
          }
        });

        // Delete all customer lists
        await prisma.customer_List.deleteMany({
          where: {
            businessId: business?.id,
          }
        });

        // Delete all businesses
        await prisma.business.deleteMany({
          where: {
            id: business?.id,
          }
        });
      });
    } catch (error) {
      console.log(errorMessage);
    }
};