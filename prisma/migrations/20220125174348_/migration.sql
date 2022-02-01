/*
  Warnings:

  - Added the required column `dateCreated` to the `Keyword` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Keyword" ADD COLUMN     "dateCreated" TIMESTAMP(3) NOT NULL;
