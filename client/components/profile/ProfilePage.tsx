"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideBar from "@/components/feed/SideBar/SideBar";
import UserProfile from "@/components/profile/userProfile";
import ClientProvider from "@/components/reactQuery/ClientProvider";

type Props = {};

function ProfilePage(props: Props) {
  const { isAuth, status } = useSelector((state: RootState) => state.user.auth);
  return status === "success" && isAuth ? (
    <main className={" flex min-h-screen relative"}>
      {/* Sidebar */}
      <SideBar />
      {/* Feed */}
      <ClientProvider>
        <UserProfile />
      </ClientProvider>
    </main>
  ) : null;
}

export default ProfilePage;
