-- CreateTable
CREATE TABLE "Keyword" (
    "id" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Keyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyword_Customer_List" (
    "id" TEXT NOT NULL,
    "customerListId" TEXT NOT NULL,
    "keywordId" TEXT NOT NULL,

    CONSTRAINT "Keyword_Customer_List_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Keyword_Customer_List" ADD CONSTRAINT "Keyword_Customer_List_customerListId_fkey" FOREIGN KEY ("customerListId") REFERENCES "Customer_List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Keyword_Customer_List" ADD CONSTRAINT "Keyword_Customer_List_keywordId_fkey" FOREIGN KEY ("keywordId") REFERENCES "Keyword"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
