"use client";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { post } from "@/app/utils/types";
import useHandleLike from "@/app/hooks/feedHooks/useHandleLike";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Comment from "@/app/components/feed/Comment";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";

type Props = {
  post: post;
};

function PostInteractions({ post }: Props) {
  const { accessToken } = useSelector((state: RootState) => state.user.user);
  const { mutate, likes, isLiked } = useHandleLike(
    accessToken,
    post.PostLikes.length,
  );
  return (
    <div>
      <div className={"flex justify-between items-center px-3 font-medium"}>
        <p className={"flex items-center gap-1"}>
          <AiFillHeart className={"text-darkPurple"} size={16} />
          {likes}
        </p>
        <p>{post.PostComments.length} Comments</p>
      </div>
      <div className={"w-full h-0.5 rounded-xl  bg-gray-200 my-2"} />
      <div className={"flex gap-8"}>
        {/* post interactions */}
        <div
          className={
            "flex items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-lg cursor-pointer transition-all duration-300"
          }
          onClick={() => {
            mutate(post.id);
          }}
        >
          {/* Like */}
          {isLiked ? (
            <AiFillHeart className={"text-darkPurple"} size={30} />
          ) : (
            <AiOutlineHeart size={30} />
          )}
          <p className={" font-bold text-md "}>Like</p>
        </div>
        <Dialog>
          <DialogTrigger>
            <div
              className={
                "flex items-center gap-2 hover:bg-gray-200  py-1 px-2 rounded-lg cursor-pointer transition-all duration-300"
              }
            >
              {/* Comment */}
              <FaRegCommentDots size={28} />
              <p className={" font-bold text-md"}>Comment</p>
            </div>
          </DialogTrigger>
          <DialogContent
            className={"lg:h-4/6 overflow-y-hidden px-4  max-w-screen-lg"}
          >
            <DialogHeader>
              <DialogTitle className={"font-bold text-xl"}>
                Comments
              </DialogTitle>
            </DialogHeader>
            <div className={"flex flex-col gap-3 overflow-y-scroll"}>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
            <DialogFooter className={"flex items-center"}>
              <Link href={"/#"}>
                <Avatar
                  className={
                    "w-10 h-10 hover:drop-shadow-lg transition-all duration-300 "
                  }
                >
                  <AvatarImage src={"https://github.com/shadcn.png"} />
                  <AvatarFallback className={" font-bold"}>XP</AvatarFallback>
                </Avatar>
              </Link>
              <Input
                className={"rounded-xl bg-darkPurple/2 text-md font-medium"}
                placeholder={"Comment as User Name"}
              />
              <Button className={"bg-darkPurple"}>
                <IoSend />
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default PostInteractions;
