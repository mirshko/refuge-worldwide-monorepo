/*
  Warnings:

  - You are about to drop the column `coverImage_extension` on the `Show` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage_filesize` on the `Show` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage_height` on the `Show` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage_id` on the `Show` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage_mode` on the `Show` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage_width` on the `Show` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Show" DROP COLUMN "coverImage_extension",
DROP COLUMN "coverImage_filesize",
DROP COLUMN "coverImage_height",
DROP COLUMN "coverImage_id",
DROP COLUMN "coverImage_mode",
DROP COLUMN "coverImage_width",
ADD COLUMN     "coverImage" JSONB;
