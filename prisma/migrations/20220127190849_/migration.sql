/*
  Warnings:

  - Added the required column `couponsOpened` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `couponsRedeemed` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateSent` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `messagesSent` to the `Campaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "couponsOpened" INTEGER NOT NULL,
ADD COLUMN     "couponsRedeemed" INTEGER NOT NULL,
ADD COLUMN     "dateSent" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "messagesSent" INTEGER NOT NULL;
