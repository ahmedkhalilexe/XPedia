import {
  MessageCircleMore,
  Newspaper,
  Settings,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

type Props = {};

function SideBarLinks(props: Props) {
  return (
    <ul className={" flex flex-col gap-4 w-full"}>
      <Link href={"/#"}>
        <li
          className={
            " flex w-full p-2 rounded-xl items-center gap-3 hover:bg-lightBlue transition-all duration-300 ease-in-out ring-2 ring-gray-800 group"
          }
        >
          <div
            className={
              "group-hover:bg-white transition-all duration-300 ease-in-out  p-1 rounded-lg"
            }
          >
            <Newspaper />
          </div>
          <h2 className={" text-xl font-medium"}>Feed</h2>
        </li>
      </Link>
      <Link href={"/#"}>
        <li
          className={
            " flex w-full p-2 rounded-xl items-center gap-3 hover:bg-lightBlue transition-all duration-300 ease-in-out ring-2 ring-gray-800 group"
          }
        >
          <div
            className={
              "group-hover:bg-white transition-all duration-300 ease-in-out  p-1 rounded-lg"
            }
          >
            <MessageCircleMore />
          </div>
          <h2 className={" text-xl font-medium"}>Messages</h2>
        </li>
      </Link>
      <Link href={"/#"}>
        <li
          className={
            " flex w-full p-2 rounded-xl items-center gap-3 hover:bg-lightBlue transition-all duration-300 ease-in-out ring-2 ring-gray-800 group"
          }
        >
          <div
            className={
              "group-hover:bg-white transition-all duration-300 ease-in-out  p-1 rounded-lg"
            }
          >
            <UsersRound />
          </div>
          <h2 className={" text-xl font-medium"}>Friends</h2>
        </li>
      </Link>
      <Link href={"/#"}>
        <li
          className={
            " flex w-full p-2 rounded-xl items-center gap-3 hover:bg-lightBlue transition-all duration-300 ease-in-out ring-2 ring-gray-800 group"
          }
        >
          <div
            className={
              "group-hover:bg-white transition-all duration-300 ease-in-out  p-1 rounded-lg"
            }
          >
            <Settings />
          </div>
          <h2 className={" text-xl font-medium"}>Settings</h2>
        </li>
      </Link>
    </ul>
  );
}

export default SideBarLinks;
