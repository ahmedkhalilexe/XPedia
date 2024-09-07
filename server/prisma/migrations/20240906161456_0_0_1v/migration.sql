/*
  Warnings:

  - A unique constraint covering the columns `[ownerId]` on the table `friendsLists` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "profilePicture" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "friendsLists_ownerId_key" ON "friendsLists"("ownerId");
