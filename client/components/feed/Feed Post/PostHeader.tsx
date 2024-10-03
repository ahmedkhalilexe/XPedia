import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { formatDistanceToNow } from "date-fns";
type Props = {
  name: string;
  profilePicture?: string;
  createdAt: string;
  userId: string;
};

function PostHeader({ name, profilePicture, createdAt, userId }: Props) {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  return (
    <div className={"flex justify-between"}>
      {/* user profile and time posted */}
      <div className={"flex gap-2"}>
        <Link href={`/profile/${userId}`}>
          <Avatar
            className={
              "w-12 h-12 hover:drop-shadow-lg transition-all duration-300 "
            }
          >
            <AvatarImage
              src={profilePicture || "https://github.com/shadcn.png"}
            />
            <AvatarFallback className={" font-bold"}>XP</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <Link href={`/profile/${userId}`}>
            <h1
              className={
                " font-bold text-xl hover:drop-shadow-lg transition-all duration-300"
              }
            >
              {name}
            </h1>
          </Link>
          <p className={"text-gray-500 text-sm font-medium"}>{timeAgo}</p>
        </div>
      </div>
      <div>
        <Button variant={"ghost"}>
          <BiDotsHorizontalRounded size={24} />
        </Button>
      </div>
    </div>
  );
}

export default PostHeader;
