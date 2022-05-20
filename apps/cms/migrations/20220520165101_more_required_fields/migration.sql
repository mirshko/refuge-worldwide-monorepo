/*
  Warnings:

  - Made the column `status` on table `Show` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publishDate` on table `Show` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Show" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "publishDate" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" SET NOT NULL;
