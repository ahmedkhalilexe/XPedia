import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function FriendsList({ children }: Props) {
  return (
    <div
      className={
        "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-3"
      }
    >
      {children}
    </div>
  );
}

export default FriendsList;
