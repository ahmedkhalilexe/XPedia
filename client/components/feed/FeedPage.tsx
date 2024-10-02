"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideBar from "@/components/feed/SideBar/SideBar";
import Feed from "@/components/feed/Feed";

type Props = {};

function FeedPage(props: Props) {
  const { isAuth, status } = useSelector((state: RootState) => state.user.auth);
  return status === "success" && isAuth ? (
    <main className={" flex min-h-screen relative"}>
      {/* Sidebar */}
      <SideBar />
      {/* Feed */}
      <Feed />
    </main>
  ) : null;
}

export default FeedPage;
