import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { comment } from "@/app/utils/types";
import { formatDistanceToNow } from "date-fns";

type Props = {
  commentContent: comment;
};

function Comment({ commentContent }: Props) {
  const timeAgo = formatDistanceToNow(new Date(commentContent.createdAt), {
    addSuffix: true,
  });

  return (
    <div className={"flex gap-2 max-w-full"}>
      <Link href={"/#"}>
        <Avatar
          className={
            "w-10 h-10 hover:drop-shadow-lg transition-all duration-300 "
          }
        >
          <AvatarImage
            src={
              commentContent.user.profilePicture ||
              "https://github.com/shadcn.png"
            }
          />
          <AvatarFallback className={" font-bold"}>XP</AvatarFallback>
        </Avatar>
      </Link>
      <div className={" grow-0 max-w-full overflow-hidden mr-2"}>
        <div
          className={
            "flex flex-col gap-2 bg-darkPurple/10 p-2 rounded-xl mb-1 w-full"
          }
        >
          <Link href={"#"}>
            <h1 className={" font-bold text-lg text-gray-900"}>
              {commentContent.user.name}
            </h1>
          </Link>
          <p className={"text-gray-900 text-md font-medium break-all"}>
            {commentContent.body}
          </p>
        </div>
        <p className={"text-gray-800 text-sm font-medium"}>{timeAgo}</p>
      </div>
    </div>
  );
}

export default Comment;
