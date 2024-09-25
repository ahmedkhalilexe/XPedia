import Post from "@/app/components/feed/Post";

type Props = {};

function FeedList(props: Props) {
  return (
    <div className={" flex flex-col gap-4 w-5/6 items-center justify-center"}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default FeedList;
