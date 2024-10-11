import FriendsList from "@/components/friends/FriendsList";
import FriendRequestCard from "@/components/friends/FriendRequestCard";
import { useQuery } from "react-query";
import { privateAxios } from "@/utils/axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { friendRequestsResponse } from "@/utils/types";

function FriendRequestsTab() {
  const { accessToken } = useSelector((state: RootState) => state.user.user);
  const { data, isLoading, isError } = useQuery({
    queryKey: "friendRequests",
    queryFn: async () => {
      return privateAxios
        .get("/users/friendRequest", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data as friendRequestsResponse);
    },
  });
  return (
    <FriendsList>
      {!(data && !isLoading) ? (
        <div>Loading...</div>
      ) : (
        data.data.map((request) => (
          <FriendRequestCard key={request.id} request={request} />
        ))
      )}
    </FriendsList>
  );
}

export default FriendRequestsTab;
