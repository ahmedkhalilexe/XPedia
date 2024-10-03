import ProfilePage from "@/components/profile/ProfilePage";

type Props = {
  params: { userId: string };
};

function Page({ params }: Props) {
  return <ProfilePage userId={params.userId} />;
}

export default Page;
