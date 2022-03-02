import { prisma } from "../../graphql/context/prisma";

export const testUser = {
  firstName: "FirstName",
  lastName: "LastName",
  email: "sample@email.com",
  password: "password",
  badPassowrd: "badPassword",
};

export const cleanDatabase = async ( errorMessage: string ) => {
  // Clean up database in case
  try {
    await prisma.user.delete({
      where: {
        email: testUser.email
      }
    });
  } catch (error) {
    console.log(errorMessage);
  }
};