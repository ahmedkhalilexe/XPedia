import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useQuery } from "react-query";
import { privateAxios } from "@/utils/axios";
import { friendsResponse } from "@/utils/types";
import FriendsList from "@/components/friends/FriendsList";
import FriendCard from "@/components/friends/FriendCard";

function FriendsTab() {
  const { accessToken } = useSelector((state: RootState) => state.user.user);
  const { data, isLoading } = useQuery({
    queryKey: "friends",
    queryFn: async () => {
      return privateAxios
        .get("/users/friends/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data as friendsResponse);
    },
  });
  return (
    <FriendsList>
      {!(data && !isLoading) ? (
        <div>Loading...</div>
      ) : (
        data.data.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))
      )}
    </FriendsList>
  );
}

export default FriendsTab;
