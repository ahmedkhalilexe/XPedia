/*
  Warnings:

  - A unique constraint covering the columns `[userId,friendListId]` on the table `Friends` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `PostLikes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `PostLikes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Friends_userId_friendListId_key" ON "Friends"("userId", "friendListId");

-- CreateIndex
CREATE UNIQUE INDEX "PostLikes_userId_key" ON "PostLikes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PostLikes_postId_key" ON "PostLikes"("postId");
