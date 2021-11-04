-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "businessId" TEXT NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
