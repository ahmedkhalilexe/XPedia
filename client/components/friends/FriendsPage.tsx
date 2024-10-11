"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideBar from "@/components/feed/SideBar/SideBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FriendRequestsTab from "@/components/friends/FriendRequestsTab";
import ClientProvider from "@/components/reactQuery/ClientProvider";

function FriendsPage() {
  const { isAuth, status } = useSelector((state: RootState) => state.user.auth);
  return status === "success" && isAuth ? (
    <main className={" flex min-h-screen relative"}>
      {/* Sidebar */}
      <SideBar />
      {/* Feed */}
      <section
        className={
          "bg-lightGray rounded-l-2xl min-h-full px-4 py-3 w-5/6 lg:px-14 lg:py-10"
        }
      >
        <h1 className={"text-5xl font-bold text-gray-900 mb-5 "}>Friends</h1>
        <div className={"flex flex-col "}>
          <Tabs defaultValue="friendRequests" className="w-full">
            <TabsList className={"w-full"}>
              <TabsTrigger
                value="friendRequests"
                className={"w-full text-md font-bold"}
              >
                Friend Requests
              </TabsTrigger>
              <TabsTrigger
                value="allFriends"
                className={"w-full text-md font-bold"}
              >
                All Friends
              </TabsTrigger>
            </TabsList>
            <TabsContent value="friendRequests">
              {/* Friend Requests List */}
              <ClientProvider>
                <FriendRequestsTab />
              </ClientProvider>
            </TabsContent>
            <TabsContent value="allFriends">
              {/* All Friends List */}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  ) : null;
}

export default FriendsPage;
