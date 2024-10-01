import { useMutation } from "react-query";
import { privateAxios } from "@/app/utils/axios";
import { postLikeResponse } from "@/app/utils/types";

const useHandleLike = (token: string, likeCount: number, isLiked: boolean) => {
  return useMutation({
    mutationKey: "like",
    mutationFn: async (postId: string) => {
      if (isLiked) {
        // unlike
        return privateAxios
          .delete("/posts/like", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              postId,
            },
          })
          .then((res) => res.data as postLikeResponse);
      } else {
        // like
        return privateAxios
          .post(
            "/posts/like",
            {
              postId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((res) => res.data as postLikeResponse);
      }
    },
  });
};

export default useHandleLike;
