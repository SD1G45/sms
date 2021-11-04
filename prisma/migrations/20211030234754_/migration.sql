/*
  Warnings:

  - Added the required column `role` to the `Business_User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'ADMIN', 'EDITOR', 'VIEWER');

-- AlterTable
ALTER TABLE "Business_User" ADD COLUMN     "role" "Role" NOT NULL;
