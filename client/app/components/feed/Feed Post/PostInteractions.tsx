"use client";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { post } from "@/app/utils/types";
import useHandleLike from "@/app/hooks/feedHooks/useHandleLike";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import CommentsSection from "@/app/components/feed/CommentsSection";
import useHandleComment from "@/app/hooks/feedHooks/useHandleComment";

type Props = {
  post: post;
};

function PostInteractions({ post }: Props) {
  const { accessToken } = useSelector((state: RootState) => state.user.user);
  const likeMutation = useHandleLike(
    accessToken,
    post.PostLikes.length,
    post.isLiked,
  );
  const commentMutation = useHandleComment(accessToken);
  return (
    <div>
      <div className={"flex justify-between items-center px-3 font-medium"}>
        <p className={"flex items-center gap-1"}>
          <AiFillHeart className={"text-darkPurple"} size={16} />
          {post.PostLikes.length}
        </p>
        <p>{post.PostComments.length} Comments</p>
      </div>
      <div className={"w-full h-0.5 rounded-xl  bg-gray-200 my-2"} />
      <div className={"flex gap-8"}>
        {/* post interactions */}
        <div
          className={
            "flex items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-lg cursor-pointer transition-all duration-300"
          }
          onClick={async () => {
            await likeMutation.mutateAsync(post.id).then(() => {
              post.isLiked = !post.isLiked;
            });
          }}
        >
          {/* Like */}
          {post.isLiked ? (
            <AiFillHeart className={"text-darkPurple"} size={30} />
          ) : (
            <AiOutlineHeart size={30} />
          )}
          <p className={" font-bold text-md "}>Like</p>
        </div>
        <CommentsSection
          postId={post.id}
          commentList={post.PostComments}
          commentMutation={commentMutation}
        />
      </div>
    </div>
  );
}

export default PostInteractions;
