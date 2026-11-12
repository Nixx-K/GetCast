-- CreateTable
CREATE TABLE "User_Talent" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_Talent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Client" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "NIP" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Talent_email_key" ON "User_Talent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Client_NIP_key" ON "User_Client"("NIP");
