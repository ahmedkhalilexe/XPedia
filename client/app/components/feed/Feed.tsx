import PostForm from "@/app/components/feed/PostForm";
import FeedList from "@/app/components/feed/FeedList";

type Props = {};

function Feed(props: Props) {
  return (
    <section
      className={"bg-lightGray rounded-l-2xl min-h-full w-5/6 px-14 py-10"}
    >
      <h1 className={"text-5xl font-bold text-gray-900 "}>Feed</h1>
      <PostForm />
      <FeedList />
    </section>
  );
}

export default Feed;
