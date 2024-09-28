import UserAvatar from "@/app/components/feed/UserAvatar";
import SideBarLinks from "@/app/components/feed/SideBar/SideBarLinks";
import { BiSolidLogOut } from "react-icons/bi";

type Props = {};

function SideBar(props: Props) {
  return (
    <nav
      className={
        " flex flex-col justify-between items-center h-screen w-1/6 bg-white py-9 px-4 sticky top-0 left-0"
      }
    >
      <div className={"flex flex-col gap-6 items-center"}>
        <UserAvatar textClass={"mt-2 hidden lg:block"} />
        <SideBarLinks />
      </div>
      <div
        className={
          "lg:w-full flex px-3 py-2 rounded-xl justify-center lg:justify-start items-center text-gray-900 gap-5 hover:bg-red-700 hover:text-saltWhite transition-all duration-300 ease-in-out cursor-pointer"
        }
      >
        <BiSolidLogOut size={24} />
        <h2 className={" text-xl font-bold hidden lg:block"}>Logout</h2>
      </div>
    </nav>
  );
}

export default SideBar;
