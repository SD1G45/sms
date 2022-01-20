/*
  Warnings:

  - Added the required column `opened` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `redeemed` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sent` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "opened" INTEGER NOT NULL,
ADD COLUMN     "redeemed" INTEGER NOT NULL,
ADD COLUMN     "sent" INTEGER NOT NULL;
