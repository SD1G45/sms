/*
  Warnings:

  - Added the required column `customerId` to the `EmailResetCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmailResetCode" ADD COLUMN     "customerId" TEXT NOT NULL;
