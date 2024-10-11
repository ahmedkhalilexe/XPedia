import { Button } from "@/components/ui/button";
import Image from "next/image";
import { friendRequest } from "@/utils/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useUpdateFriendRequest from "@/hooks/friends/useUpdateFriendRequest";

type Props = {
  request: friendRequest;
};

function FriendRequestCard({ request }: Props) {
  const { accessToken } = useSelector((state: RootState) => state.user.user);

  const updateMutation = useUpdateFriendRequest(accessToken);
  return (
    <div
      className={
        "w-full h-fit flex items-center p-3 gap-3 md:block bg-saltWhite overflow-hidden rounded-xl border border-gray-300 drop-shadow-sm"
      }
    >
      <Image
        width={900}
        height={900}
        src={"/images/avatarPlaceHolder.jpg"}
        className={
          "w-2/6 h-fit md:h-full md:w-full rounded-full md:rounded-lg aspect-square "
        }
        alt={"profile picture"}
      />
      <div className={"w-full py-3 bg-saltWhite"}>
        <h2 className={"text-lg font-bold"}>{request.sender.name}</h2>
        <Button
          onClick={async () => {
            await updateMutation.mutateAsync({
              userId: request.senderId,
              status: "ACCEPTED",
            });
            console.log("accepted");
          }}
          className={
            "w-full my-3 text-md font-bold bg-darkPurple hover:bg-darkPurple/70"
          }
        >
          Accept
        </Button>
        <Button
          onClick={async () => {
            await updateMutation.mutateAsync({
              userId: request.senderId,
              status: "REJECTED",
            });
            console.log("deleted");
          }}
          className={"w-full text-md font-bold bg-gray-600 hover:bg-gray-500"}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default FriendRequestCard;
