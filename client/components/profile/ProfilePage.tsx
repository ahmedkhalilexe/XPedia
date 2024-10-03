"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideBar from "@/components/feed/SideBar/SideBar";
import UserProfile from "@/components/profile/userProfile";
import ClientProvider from "@/components/reactQuery/ClientProvider";

type Props = {
  userId: string;
};

function ProfilePage({ userId }: Props) {
  const { isAuth, status } = useSelector((state: RootState) => state.user.auth);
  const { id } = useSelector((state: RootState) => state.user.user);

  const isCurrentUser = userId === id;
  return status === "success" && isAuth ? (
    <main className={" flex min-h-screen relative"}>
      {/* Sidebar */}
      <SideBar />
      {/* Feed */}
      <ClientProvider>
        <UserProfile
          isCurrentUser={isCurrentUser}
          userId={!isCurrentUser ? userId : undefined}
        />
      </ClientProvider>
    </main>
  ) : null;
}

export default ProfilePage;
