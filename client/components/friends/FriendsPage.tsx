"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideBar from "@/components/feed/SideBar/SideBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FriendsList from "@/components/friends/FriendsList";
import FriendRequestCard from "@/components/friends/FriendRequestCard";

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
              <FriendsList>
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
                <FriendRequestCard />
              </FriendsList>
            </TabsContent>
            <TabsContent value="allFriends">
              {/* All Friends List */}
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  ) : null;
}

export default FriendsPage;
