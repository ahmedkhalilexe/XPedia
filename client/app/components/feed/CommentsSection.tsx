"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegCommentDots } from "react-icons/fa";
import Comment from "@/app/components/feed/Comment";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";
import { comment, commentAddResponse } from "@/app/utils/types";
import { UseMutationResult } from "react-query";
import { FormEvent, useState } from "react";
import { RotateCw } from "lucide-react";
import { useDispatch } from "react-redux";
import { addComment } from "@/app/redux/feed/feedSlicer";

type Props = {
  postId: string;
  commentList: comment[];
  commentMutation: UseMutationResult<
    commentAddResponse,
    unknown,
    { postId: string; body: string },
    unknown
  >;
};

function CommentsSection({ postId, commentList, commentMutation }: Props) {
  const [comment, setComment] = useState("");
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await commentMutation.mutateAsync({ postId, body: comment }).then((res) => {
      dispatch(addComment({ postId, comment: res.data }));
    });
    setComment("");
  };
  const dispatch = useDispatch();
  return (
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
        className={
          "lg:h-4/6 overflow-y-hidden px-4  max-w-screen-lg grid-rows-commentSection"
        }
      >
        <DialogDescription className={"hidden"}></DialogDescription>
        <DialogHeader>
          <DialogTitle className={"font-bold text-xl h-fit"}>
            Comments
          </DialogTitle>
        </DialogHeader>
        <div className={"flex flex-col gap-3 overflow-y-scroll h-full"}>
          {commentList.map((comment) => (
            <Comment key={comment.id} commentContent={comment} />
          ))}
        </div>
        <DialogFooter className={"sm:flex-col"}>
          <form className={"flex items-center"} onSubmit={handleOnSubmit}>
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
              required
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder={"Comment as User Name"}
            />
            <Button type={"submit"} className={"bg-darkPurple"}>
              {commentMutation.isLoading ? (
                <RotateCw className={" animate-spin"} />
              ) : (
                <IoSend />
              )}
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CommentsSection;
