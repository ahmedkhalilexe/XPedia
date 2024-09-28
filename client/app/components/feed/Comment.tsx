import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

function Comment(props: Props) {
  return (
    <div className={"flex gap-2 max-w-full"}>
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
      <div className={" grow-0 max-w-full overflow-hidden mr-2"}>
        <div
          className={
            "flex flex-col gap-2 bg-darkPurple/10 p-2 rounded-xl mb-1 w-full"
          }
        >
          <h1 className={" font-bold text-lg text-gray-900"}>User Name</h1>
          <p className={"text-gray-900 text-md font-medium break-all"}>
            commentcommentcommentcommentcommentcommentcommentcomment
          </p>
        </div>
        <p className={"text-gray-800 text-sm font-medium"}>1 hour ago</p>
      </div>
    </div>
  );
}

export default Comment;
