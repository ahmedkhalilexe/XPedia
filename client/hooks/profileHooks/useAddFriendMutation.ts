import { useMutation } from "react-query";
import { privateAxios } from "@/utils/axios";

const useAddFriendMutation = (token: string) => {
  return useMutation({
    mutationKey: "addFriend",
    mutationFn: async (userId: string) => {
      return privateAxios
        .post(
          "/users/friendRequest",
          {
            userId,
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

export default useAddFriendMutation;
