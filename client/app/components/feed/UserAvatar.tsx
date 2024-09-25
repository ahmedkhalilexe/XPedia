import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  textClass?: string;
};

function UserAvatar({ className, textClass }: Props) {
  return (
    <div className={" flex flex-col w-fit justify-center items-center"}>
      <Link href={"/#"}>
        <Avatar
          className={cn(
            "w-24 h-24 hover:drop-shadow-lg transition-all duration-300 ",
            className,
          )}
        >
          <AvatarImage src={"https://github.com/shadcn.png"} />
          <AvatarFallback className={" font-bold"}>XP</AvatarFallback>
        </Avatar>
      </Link>
      <Link href={"/#"}>
        <h1
          className={cn(
            " font-bold text-2xl hover:drop-shadow-lg transition-all duration-300",
            textClass,
          )}
        >
          User Name
        </h1>
      </Link>
    </div>
  );
}

export default UserAvatar;
