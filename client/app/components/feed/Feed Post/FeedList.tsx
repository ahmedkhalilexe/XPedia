import Post from "@/app/components/feed/Feed Post/Post";
import { useQuery } from "react-query";
import { privateAxios } from "@/app/utils/axios";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { postsGetResponse } from "@/app/utils/types";
import { RotateCw } from "lucide-react";

type Props = {};

function FeedList(props: Props) {
  const { accessToken } = useSelector((state: RootState) => state.user.user);
  const { data, isLoading } = useQuery("posts", {
    queryFn: async () => {
      return privateAxios
        .get("/posts", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data as postsGetResponse);
    },
  });
  return (
    <div
      className={" flex flex-col gap-4 lg:w-5/6 items-center justify-center"}
    >
      {isLoading ? <RotateCw size={32} className={" animate-spin"} /> : null}
      {data?.data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default FeedList;
