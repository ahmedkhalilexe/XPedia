import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  title: string;
  children: ReactNode;
};

function SideBarLink({ href, title, children }: Props) {
  return (
    <Link href={href}>
      <li
        className={
          " flex w-full px-3 py-2 rounded-xl items-center text-gray-900 gap-5 hover:bg-darkPurple hover:text-saltWhite transition-all duration-300 ease-in-out"
        }
      >
        {children}
        <h2 className={" text-xl font-bold"}>{title}</h2>
      </li>
    </Link>
  );
}

export default SideBarLink;
