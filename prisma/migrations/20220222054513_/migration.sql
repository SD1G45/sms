-- CreateTable
CREATE TABLE "Customer_Coupon" (
    "id" TEXT NOT NULL,
    "redeemed" BOOLEAN NOT NULL,
    "opened" BOOLEAN NOT NULL,
    "customerId" TEXT NOT NULL,
    "couponId" TEXT NOT NULL,

    CONSTRAINT "Customer_Coupon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Customer_Coupon" ADD CONSTRAINT "Customer_Coupon_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer_Coupon" ADD CONSTRAINT "Customer_Coupon_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
