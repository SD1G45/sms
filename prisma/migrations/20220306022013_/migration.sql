/*
  Warnings:

  - You are about to drop the column `email` on the `EmailResetCode` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `EmailResetCode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmailResetCode" DROP COLUMN "email",
DROP COLUMN "userId";
