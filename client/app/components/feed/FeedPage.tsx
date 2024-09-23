"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import SideBar from "@/app/components/feed/SideBar/SideBar";
import Feed from "@/app/components/feed/Feed";

type Props = {};

function FeedPage(props: Props) {
  const { isAuth, status } = useSelector((state: RootState) => state.user.auth);
  return status === "success" && isAuth ? (
    <main className={" flex min-h-screen"}>
      {/* Sidebar */}
      <SideBar />
      {/* Feed */}
      <Feed />
    </main>
  ) : null;
}

export default FeedPage;
