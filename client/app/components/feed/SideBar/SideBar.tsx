import UserAvatar from "@/app/components/feed/UserAvatar";
import SideBarLinks from "@/app/components/feed/SideBar/SideBarLinks";
import { Button } from "@/components/ui/button";
import { BiSolidLogOut } from "react-icons/bi";

type Props = {};

function SideBar(props: Props) {
  return (
    <nav
      className={
        " flex flex-col justify-between items-center min-h-full w-1/6 bg-white py-9 px-4"
      }
    >
      <div className={"flex flex-col gap-6 items-center"}>
        <UserAvatar />
        <SideBarLinks />
      </div>
      <Button
        className={
          " flex justify-start h-fit shadow-transparent w-full bg-transparent text-xl font-bold px-3 py-2 rounded-xl items-center text-gray-900 gap-5 hover:bg-red-700 hover:text-saltWhite transition-all duration-300 ease-in-out"
        }
      >
        <BiSolidLogOut size={24} />
        Logout
      </Button>
    </nav>
  );
}

export default SideBar;
