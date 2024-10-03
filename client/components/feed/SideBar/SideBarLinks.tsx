import SideBarLink from "@/components/feed/SideBar/SideBarLink";
import {
  TbMessageFilled,
  TbHomeFilled,
  TbSettingsFilled,
} from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { TbUserSearch } from "react-icons/tb";

type Props = {};

function SideBarLinks(props: Props) {
  return (
    <ul className={" flex flex-col gap-12 w-full"}>
      <div className={" flex flex-col gap-4 w-full"}>
        <SideBarLink href={"/"} title={"Feed"}>
          <TbHomeFilled size={24} />
        </SideBarLink>
        <SideBarLink href={"/#"} title={"Messages"}>
          <TbMessageFilled size={24} />
        </SideBarLink>
        <SideBarLink href={"/#"} title={"Friends"}>
          <FaUserFriends size={24} />
        </SideBarLink>
        <SideBarLink href={"/#"} title={"Settings"}>
          <TbSettingsFilled size={24} />
        </SideBarLink>
      </div>
      <div className={"relative"}>
        <Input
          type={"search"}
          placeholder={"Search"}
          className={
            "pl-14 text-xl font-bold py-5 focus-visible:bg-darkPurple rounded-xl peer focus-visible:text-saltWhite focus-visible:ring-0 focus-visible:placeholder:text-saltWhite/50"
          }
        />
        <TbUserSearch
          size={26}
          className={" absolute top-1.5 left-3 peer-focus:text-white"}
        />
      </div>
    </ul>
  );
}

export default SideBarLinks;
