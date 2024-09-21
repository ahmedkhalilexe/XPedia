import UserAvatar from "@/app/components/feed/UserAvatar";
import SideBarLinks from "@/app/components/feed/SideBarLinks";

type Props = {};

function SideBar(props: Props) {
  return (
    <nav
      className={
        " flex flex-col gap-6 items-center min-h-full w-1/6 bg-white py-9 px-4"
      }
    >
      <UserAvatar />
      <SideBarLinks />
    </nav>
  );
}

export default SideBar;
