import Post from "@/components/feed/Feed Post/Post";
import { useQuery } from "react-query";
import { privateAxios } from "@/utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { postsGetResponse } from "@/utils/types";
import { RotateCw } from "lucide-react";
import { initialPosts } from "@/redux/feed/feedSlicer";

type Props = {};

function FeedList(props: Props) {
  const { accessToken, id } = useSelector(
    (state: RootState) => state.user.user,
  );
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.feed);
  const { isLoading } = useQuery("posts", {
    queryFn: async () => {
      return privateAxios
        .get("/posts", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data as postsGetResponse);
    },
    onSuccess: (data) => {
      const posts = data.data.map((post) => ({
        ...post,
        isLiked: post.PostLikes.some((like) => like.userId === id),
      }));
      dispatch(initialPosts(posts));
    },
  });
  return (
    <div
      className={" flex flex-col gap-4 lg:w-5/6 items-center justify-center"}
    >
      {isLoading ? <RotateCw size={32} className={" animate-spin"} /> : null}
      {posts?.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default FeedList;
