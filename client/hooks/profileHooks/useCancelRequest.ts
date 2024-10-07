import { useMutation } from "react-query";
import { privateAxios } from "@/utils/axios";

const useCancelRequestMutation = (token: string) => {
  return useMutation({
    mutationKey: "addFriend",
    mutationFn: async (userId: string) => {
      return privateAxios
        .delete("/users/friendRequest", {
          params: {
            userId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data);
    },
  });
};

export default useCancelRequestMutation;
