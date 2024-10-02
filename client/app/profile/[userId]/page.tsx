import ProfilePage from "@/components/profile/ProfilePage";

type Props = {
  params: { userId: string };
};

function Page({ params }: Props) {
  return <ProfilePage />;
}

export default Page;
