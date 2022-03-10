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
}

export const cleanDatabase = async ( errorMessage: string ) => {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: testUser.email,
        }
      })

      // Delete all Business_Users
      await prisma.business_User.deleteMany({
        where: {
          userId: user?.id,
        }
      })
  
      // Delete user
      await prisma.user.delete({
        where: {
          id: user?.id
        }
      });

      // Delete business
      const business = await prisma.business.findFirst({
        where: {
          name: testBusiness.name,
        }
      })
      await prisma.business.delete({
        where: {
          id: business?.id,
        }
      })
      
    } catch (error) {
      console.log(errorMessage);
    }
};