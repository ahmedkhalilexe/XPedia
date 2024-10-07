"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideBar from "@/components/feed/SideBar/SideBar";
import UserProfile from "@/components/profile/userProfile";
import ClientProvider from "@/components/reactQuery/ClientProvider";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

type Props = {
  userId: string;
};

function ProfilePage({ userId }: Props) {
  const { isAuth, status } = useSelector((state: RootState) => state.user.auth);
  const { id } = useSelector((state: RootState) => state.user.user);
  const router = useRouter();
  if (!isAuth && status === "failed") {
    router.replace("/");
  }

  const isCurrentUser = userId === id;
  return status === "success" && isAuth ? (
    <main className={" flex min-h-screen relative"}>
      {/* Sidebar */}
      <SideBar />
      {/* Feed */}
      <ClientProvider>
        <UserProfile isCurrentUser={isCurrentUser} userId={userId} />
      </ClientProvider>
    </main>
  ) : null;
}

export default ProfilePage;
