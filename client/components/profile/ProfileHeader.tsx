"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TbDots } from "react-icons/tb";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
type Props = {
  isCurrentUser: boolean;
};

function ProfileHeader({ isCurrentUser }: Props) {
  const { name } = useSelector((state: RootState) => state.user.user);
  return (
    <div className={"lg:w-5/6 h-fit"}>
      <div className={"bg-darkPurple w-full h-60 rounded-xl overflow-hidden "}>
        {/* Profile Banner */}
        <Image
          width={1920}
          height={240}
          src={"/images/profileBanner.jpg"}
          alt={"Profile Banner"}
          className={"w-full h-full object-cover"}
        />
      </div>
      <div
        className={
          "flex justify-between items-center relative h-fit w-full px-4 static -top-10"
        }
      >
        {/*  Profile details  */}
        <div className={"flex items-center gap-3"}>
          <Link href={"/#"} className={""}>
            <Avatar
              className={
                "w-36 h-36 hover:drop-shadow-lg transition-all duration-300 border-4 border-lightGray "
              }
            >
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback className={" font-bold"}>XP</AvatarFallback>
            </Avatar>
          </Link>
          <h1 className={"font-bold text-3xl"}>
            {isCurrentUser ? name : "User Name"}
          </h1>
        </div>
        <div className={"flex items-center gap-3"}>
          {isCurrentUser ? (
            <Button
              className={
                "rounded-xl bg-darkPurple font-medium text-md hover:bg-darkPurple/70"
              }
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              className={
                "rounded-xl bg-darkPurple font-medium text-md hover:bg-darkPurple/70"
              }
            >
              Add Friend
            </Button>
          )}
          <Button
            variant={"ghost"}
            className={"rounded-xl hover:bg-darkPurple/5"}
          >
            <TbDots size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
