/*
  Warnings:

  - Added the required column `email` to the `EmailResetCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmailResetCode" ADD COLUMN     "email" TEXT NOT NULL;
