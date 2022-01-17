/*
  Warnings:

  - Added the required column `businessId` to the `Customer_List` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer_List" ADD COLUMN     "businessId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Customer_List" ADD CONSTRAINT "Customer_List_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
