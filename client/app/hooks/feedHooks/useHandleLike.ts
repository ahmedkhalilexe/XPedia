import { useMutation } from "react-query";
import { privateAxios } from "@/app/utils/axios";
import { postLikeResponse, postUnlikeResponse } from "@/app/utils/types";
import { useState } from "react";

const useHandleLike = (token: string, likeCount: number) => {
  const [isLiked, setIsLiked] = useState(true);
  const [likes, setLikes] = useState(likeCount);
  const likeMutation = useMutation({
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
          .then((res) => res.data as postUnlikeResponse);
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
    onSuccess: () => {
      if (isLiked) {
        setIsLiked(!isLiked);
        setLikes((prev) => prev - 1);
      } else {
        setIsLiked(!isLiked);
        setLikes((prev) => prev + 1);
      }
    },
  });
  return { mutate: likeMutation.mutate, likes, isLiked };
};

export default useHandleLike;
