-- CreateTable
CREATE TABLE "EmailResetCode" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailResetCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailResetCode_value_key" ON "EmailResetCode"("value");
