import ProfileHeader from "@/components/profile/ProfileHeader";
import PostForm from "@/components/feed/Feed Post/PostForm";
import FeedList from "@/components/feed/Feed Post/FeedList";

type Props = {};

function UserProfile(props: Props) {
  return (
    <section
      className={
        "bg-lightGray rounded-l-2xl min-h-full px-4 py-3 w-5/6 lg:px-14 lg:py-10"
      }
    >
      <ProfileHeader />
      <PostForm className={"-mt-4"} />
      <FeedList />
    </section>
  );
}

export default UserProfile;
