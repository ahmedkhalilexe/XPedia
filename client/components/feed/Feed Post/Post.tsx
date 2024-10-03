import PostHeader from "@/components/feed/Feed Post/PostHeader";
import PostContent from "@/components/feed/Feed Post/PostContent";
import PostInteractions from "@/components/feed/Feed Post/PostInteractions";
import { post } from "@/utils/types";

type Props = {
  post: post;
};

function Post({ post }: Props) {
  return (
    <div
      className={
        "flex flex-col w-full drop-shadow-md  rounded-xl bg-saltWhite p-2 lg:p-4"
      }
    >
      <PostHeader
        name={post.user.name}
        createdAt={post.createdAt}
        userId={post.userId}
      />
      <PostContent body={post.body} />
      <div className={"w-full h-0.5 rounded-xl bg-gray-200 mb-2"} />
      <PostInteractions post={post} />
    </div>
  );
}

export default Post;
