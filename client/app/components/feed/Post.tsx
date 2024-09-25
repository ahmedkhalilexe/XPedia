import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineLike, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

type Props = {};

function Post(props: Props) {
  return (
    <div
      className={
        "flex flex-col w-full drop-shadow-md  rounded-xl bg-saltWhite p-4"
      }
    >
      <div className={"flex justify-between"}>
        {/* user profile and time posted */}
        <div className={"flex gap-2"}>
          <Link href={"/#"}>
            <Avatar
              className={
                "w-12 h-12 hover:drop-shadow-lg transition-all duration-300 "
              }
            >
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback className={" font-bold"}>XP</AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <Link href={"/#"}>
              <h1
                className={
                  " font-bold text-xl hover:drop-shadow-lg transition-all duration-300"
                }
              >
                User Name
              </h1>
            </Link>
            <p className={"text-gray-500 text-sm font-medium"}>1 hour ago</p>
          </div>
        </div>
        <div>
          <Button variant={"ghost"}>
            <BiDotsHorizontalRounded size={24} />
          </Button>
        </div>
      </div>
      <div>
        {/* post content */}
        <div className={"mt-2"}>
          <p className={"text-lg font-medium"}>
            Phasellus nec justo ut odio ullamcorper faucibus. Quisque tristique
            aliquet dolor nec varius. Suspendisse porta risus a iaculis feugiat.
            In blandit bibendum ultrices. Donec bibendum condimentum ante, eget
            fringilla leo rutrum non. Nam blandit neque nisi, tristique congue
            massa w.
          </p>
        </div>
        <div className={"mt-2"}>{/*  attachments  */}</div>
      </div>
      <div
        className={"w-full h-0.5 rounded-xl drop-shadow-sm bg-gray-300 mb-2"}
      />
      <div className={"flex gap-8"}>
        {/*    post interactions */}
        <div
          className={
            "flex items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-lg cursor-pointer transition-all duration-300"
          }
        >
          <AiOutlineHeart size={30} />
          <p className={" font-bold text-md"}>Like</p>
        </div>
        <div
          className={
            "flex items-center gap-2 hover:bg-gray-200  py-1 px-2 rounded-lg cursor-pointer transition-all duration-300"
          }
        >
          <FaRegCommentDots size={28} />
          <p className={" font-bold text-md"}>Comments</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
