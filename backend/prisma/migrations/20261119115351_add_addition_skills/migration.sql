/*
  Warnings:

  - Added the required column `type` to the `CastingRole` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('LEAD', 'SUPPORTING', 'ENSEMBLE');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AdditionalSkills" ADD VALUE 'BASKETBALL';
ALTER TYPE "AdditionalSkills" ADD VALUE 'PARKOUR';

-- AlterTable
ALTER TABLE "CastingRole" ADD COLUMN     "type" "RoleType" NOT NULL;
