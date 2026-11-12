-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('TALENT', 'CLIENT');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('INVITED', 'DECLINED', 'SUBMITTED', 'REJECTED', 'ACCEPTED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('FEMALE', 'MALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Ethnicity" AS ENUM ('CAUCASIAN', 'MIDDLE_EASTERN', 'AFROAMERICAN', 'LATINO', 'MIXED', 'ASIAN', 'INDIGENOUS', 'SLAVIC');

-- CreateEnum
CREATE TYPE "EyeColor" AS ENUM ('GREY', 'GREEN', 'BLUE', 'HAZEL', 'DARK_BROWN', 'HETEROCHROMIA');

-- CreateEnum
CREATE TYPE "HairColor" AS ENUM ('WHITE', 'GREY', 'BLONDE', 'BROWN', 'DARK_BLONDE', 'LIGHT_BROWN', 'DARK_BROWN', 'BLACK', 'AUBURN', 'RED', 'UNNATURAL');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('SKINNY', 'PETITE', 'ATHLETIC', 'PLUS_SIZE', 'PREGNANT', 'BODY_BUILDER', 'CURVY');

-- CreateEnum
CREATE TYPE "VoiceType" AS ENUM ('ALTO', 'SOPRANO', 'MEZZOSOPRANO', 'CONTRALTO', 'BARITONE', 'BASS', 'TENOR', 'COUNTERTENOR');

-- CreateEnum
CREATE TYPE "AdditionalSkills" AS ENUM ('MUSICAL_THEATRE_SINGING', 'MUSICAL_THEATRE_DANCE', 'CHOIR_SINGING', 'OPERA_SINGING', 'MODERN_JAZZ', 'SKATEBOARDING', 'UKULELE', 'GUITAR', 'TAP_DANCE', 'PERCUSSION', 'BALLET', 'CONTORTION', 'FIGURE_SKATING', 'PIANO', 'YOGA', 'WAKEBOARDING', 'ACROBATICS', 'SWIMMING', 'MARTIAL_ARTS', 'BALLROOM_DANCE', 'HIP_HOP', 'ARCHERY');

-- CreateEnum
CREATE TYPE "HairLength" AS ENUM ('LONG', 'VERY_LONG', 'SHORT', 'BALD', 'MEDIUM');

-- CreateEnum
CREATE TYPE "HairType" AS ENUM ('PIN_STRAIGHT', 'WAVY', 'CURLY', 'COILY', 'LOCKS');

-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('BEAUTY', 'FAST_FOOD', 'SUPERMARKET', 'AUTOMOTIVE', 'INSURANCE', 'MOBILE_SERVICES', 'ELECTRONICS', 'BANKING', 'FASHION', 'PRODUCE', 'SWEETS', 'RTV_AGD');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('FILM', 'COMMERCIAL', 'MUSIC_VIDEO', 'SERIES', 'PHOTO_SHOOT', 'THEATRE', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalentProfile" (
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "gender" "Gender" NOT NULL,
    "ethnicity" "Ethnicity" NOT NULL,
    "eyeColor" "EyeColor" NOT NULL,
    "hairColor" "HairColor",
    "hairLength" "HairLength",
    "hairType" "HairType",
    "heightInCm" INTEGER NOT NULL,
    "weightInKg" INTEGER NOT NULL,
    "chestPerimeterInCm" INTEGER,
    "waistPerimeterInCm" INTEGER,
    "hipsPerimeterInCm" INTEGER,
    "bodyType" "BodyType",
    "voiceType" "VoiceType",
    "actingAgeFrom" INTEGER,
    "actingAgeTo" INTEGER,
    "description" TEXT,
    "additionalSkills" "AdditionalSkills"[] DEFAULT ARRAY[]::"AdditionalSkills"[],
    "showreelUrl" TEXT,
    "headshotUrl" TEXT NOT NULL,
    "fullBodyShotUrl" TEXT,
    "additionalPhotoUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "TalentProfile_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "ClientProfile" (
    "userId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "nip" TEXT NOT NULL,
    "industry" "Industry" NOT NULL,

    CONSTRAINT "ClientProfile_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Casting" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "clientIndustry" "Industry" NOT NULL,
    "conflictWindowMonths" INTEGER NOT NULL DEFAULT 12,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "applicationDeadline" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Casting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CastingRole" (
    "id" TEXT NOT NULL,
    "castingId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender",
    "ageFrom" INTEGER NOT NULL,
    "ageTo" INTEGER NOT NULL,
    "additionalSkillsWanted" "AdditionalSkills"[] DEFAULT ARRAY[]::"AdditionalSkills"[],
    "description" TEXT NOT NULL,
    "feeInZl" INTEGER NOT NULL,
    "shootingDays" DATE[] DEFAULT ARRAY[]::DATE[],
    "sceneDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CastingRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "talentId" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "submissionUrl" TEXT,
    "newSlateUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalentProject" (
    "id" TEXT NOT NULL,
    "talentId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "projectType" "ProjectType" NOT NULL,
    "industry" "Industry",
    "brandName" TEXT,
    "completedAt" DATE NOT NULL,
    "roleName" TEXT NOT NULL,
    "proofUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TalentProject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ClientProfile_companyName_key" ON "ClientProfile"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "ClientProfile_nip_key" ON "ClientProfile"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "ClientProfile_userId_industry_key" ON "ClientProfile"("userId", "industry");

-- CreateIndex
CREATE INDEX "Casting_clientId_idx" ON "Casting"("clientId");

-- CreateIndex
CREATE INDEX "CastingRole_castingId_idx" ON "CastingRole"("castingId");

-- CreateIndex
CREATE INDEX "Application_talentId_idx" ON "Application"("talentId");

-- CreateIndex
CREATE UNIQUE INDEX "Application_roleId_talentId_key" ON "Application"("roleId", "talentId");

-- AddForeignKey
ALTER TABLE "TalentProfile" ADD CONSTRAINT "TalentProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientProfile" ADD CONSTRAINT "ClientProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Casting" ADD CONSTRAINT "Casting_clientId_clientIndustry_fkey" FOREIGN KEY ("clientId", "clientIndustry") REFERENCES "ClientProfile"("userId", "industry") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CastingRole" ADD CONSTRAINT "CastingRole_castingId_fkey" FOREIGN KEY ("castingId") REFERENCES "Casting"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "CastingRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "TalentProfile"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalentProject" ADD CONSTRAINT "TalentProject_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "TalentProfile"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
