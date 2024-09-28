import PostHeader from "@/app/components/feed/Feed Post/PostHeader";
import PostContent from "@/app/components/feed/Feed Post/PostContent";
import PostInteractions from "@/app/components/feed/Feed Post/PostInteractions";
import { post } from "@/app/utils/types";
import { AiFillHeart } from "react-icons/ai";

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
      <PostHeader name={post.user.name} createdAt={post.createdAt} />
      <PostContent body={post.body} />
      <div className={"w-full h-0.5 rounded-xl bg-gray-200 mb-2"} />
      <PostInteractions post={post} />
    </div>
  );
}

export default Post;
