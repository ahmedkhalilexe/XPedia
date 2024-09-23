import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type Props = {};

function UserAvatar(props: Props) {
  return (
    <div className={" flex flex-col w-fit justify-center items-center gap-2"}>
      <Link href={"/#"}>
        <Avatar
          className={
            "w-24 h-24 hover:drop-shadow-lg transition-all duration-300 "
          }
        >
          <AvatarImage src={"https://github.com/shadcn.png"} />
          <AvatarFallback className={" font-bold"}>XP</AvatarFallback>
        </Avatar>
      </Link>
      <Link href={"/#"}>
        <h1
          className={
            " font-bold text-2xl hover:drop-shadow-lg transition-all duration-300"
          }
        >
          User Name
        </h1>
      </Link>
    </div>
  );
}

export default UserAvatar;
