/*
  Warnings:

  - Added the required column `couponsOpened` to the `Keyword` table without a default value. This is not possible if the table is not empty.
  - Added the required column `couponsRedeemed` to the `Keyword` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customersOnboarded` to the `Keyword` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Keyword" ADD COLUMN     "couponsOpened" INTEGER NOT NULL,
ADD COLUMN     "couponsRedeemed" INTEGER NOT NULL,
ADD COLUMN     "customersOnboarded" INTEGER NOT NULL;
