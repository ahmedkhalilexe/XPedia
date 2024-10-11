import Image from "next/image";
import { Button } from "@/components/ui/button";
import { friend } from "@/utils/types";

type Props = {
  friend: friend;
};

function FriendCard({ friend }: Props) {
  return (
    <div
      className={
        "w-full h-fit overflow-hidden rounded-xl border border-gray-300 drop-shadow-sm"
      }
    >
      <Image
        width={900}
        height={900}
        src={"/images/avatarPlaceHolder.jpg"}
        className={"w-full aspect-square object-contain"}
        alt={"profile picture"}
      />
      <div className={"w-full p-3 bg-saltWhite"}>
        <h2 className={"text-lg font-bold"}>{friend.userB.name}</h2>
        <Button
          className={
            "w-full my-3 text-md font-bold bg-darkPurple hover:bg-darkPurple/70"
          }
        >
          Message
        </Button>
      </div>
    </div>
  );
}

export default FriendCard;
