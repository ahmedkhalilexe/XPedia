import PostForm from "@/app/components/feed/Feed Post/PostForm";
import FeedList from "@/app/components/feed/Feed Post/FeedList";
import ClientProvider from "@/components/reactQuery/ClientProvider";

type Props = {};

function Feed(props: Props) {
  return (
    <section
      className={
        "bg-lightGray rounded-l-2xl min-h-full px-4 py-3 w-5/6 lg:px-14 lg:py-10"
      }
    >
      <h1 className={"text-5xl font-bold text-gray-900 "}>Feed</h1>
      <ClientProvider>
        <PostForm />
        <FeedList />
      </ClientProvider>
    </section>
  );
}

export default Feed;
