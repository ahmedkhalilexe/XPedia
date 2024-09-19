import AuthPage from "@/app/components/auth/AuthPage";
import FeedPage from "@/app/components/feed/FeedPage";

export default function Home() {
  return (
    //User not signed in
    <>
      <FeedPage />
      <AuthPage />
    </>
  );
}
