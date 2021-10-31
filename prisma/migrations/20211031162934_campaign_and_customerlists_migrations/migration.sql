-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "couponId" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign_Customer_List" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "customerListId" TEXT NOT NULL,

    CONSTRAINT "Campaign_Customer_List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer_List" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Customer_List_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign_Customer_List" ADD CONSTRAINT "Campaign_Customer_List_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign_Customer_List" ADD CONSTRAINT "Campaign_Customer_List_customerListId_fkey" FOREIGN KEY ("customerListId") REFERENCES "Customer_List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
