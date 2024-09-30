import { commentAddResponse } from "@/app/utils/types";
import { useMutation } from "react-query";
import { privateAxios } from "@/app/utils/axios";

const useHandleComment = (token: string) => {
  return useMutation({
    mutationKey: "comment",
    mutationFn: async ({ postId, body }: { postId: string; body: string }) => {
      return privateAxios
        .post(
          "/posts/comment",
          {
            postId,
            body,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => res.data as commentAddResponse);
    },
  });
};

export default useHandleComment;
