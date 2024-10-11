import { useMutation } from "react-query";
import { privateAxios } from "@/utils/axios";

const useUpdateFriendRequest = (token: string) => {
  return useMutation({
    mutationKey: "addFriend",
    mutationFn: async ({
      userId,
      status,
    }: {
      userId: string;
      status: string;
    }) => {
      return privateAxios
        .put(
          "/users/friendRequest",
          {
            userId,
            status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => res.data);
    },
  });
};

export default useUpdateFriendRequest;
