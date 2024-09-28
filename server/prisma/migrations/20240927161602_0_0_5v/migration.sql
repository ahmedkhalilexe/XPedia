/*
  Warnings:

  - A unique constraint covering the columns `[userId,postId]` on the table `PostLikes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "PostLikes_postId_key";

-- DropIndex
DROP INDEX "PostLikes_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "PostLikes_userId_postId_key" ON "PostLikes"("userId", "postId");
