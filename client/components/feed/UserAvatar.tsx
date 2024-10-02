import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type Props = {
  className?: string;
  textClass?: string;
};

function UserAvatar({ className, textClass }: Props) {
  const { name, profilePicture } = useSelector(
    (state: RootState) => state.user.user,
  );
  return (
    <div className={" flex flex-col w-fit justify-center items-center"}>
      <Link href={"/#"}>
        <Avatar
          className={cn(
            "w-16 h-16 lg:w-24 lg:h-24 hover:drop-shadow-lg transition-all duration-300 ",
            className,
          )}
        >
          <AvatarImage
            src={profilePicture || "https://github.com/shadcn.png"}
          />
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
          {name}
        </h1>
      </Link>
    </div>
  );
}

export default UserAvatar;
