-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "password" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer_List_Customer" (
    "id" TEXT NOT NULL,
    "customerListId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Customer_List_Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phoneNumber_key" ON "Customer"("phoneNumber");

-- AddForeignKey
ALTER TABLE "Customer_List_Customer" ADD CONSTRAINT "Customer_List_Customer_customerListId_fkey" FOREIGN KEY ("customerListId") REFERENCES "Customer_List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer_List_Customer" ADD CONSTRAINT "Customer_List_Customer_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
