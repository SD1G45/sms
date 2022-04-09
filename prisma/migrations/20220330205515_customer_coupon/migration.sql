-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "redeemedDates" TIMESTAMP(3)[];

-- AlterTable
ALTER TABLE "Customer_Coupon" ADD COLUMN     "redeemedAt" TIMESTAMP(3);
