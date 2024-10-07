"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useAddFriendMutation from "@/hooks/profileHooks/useAddFriendMutation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { RotateCw } from "lucide-react";
import useCancelRequestMutation from "@/hooks/profileHooks/useCancelRequest";

type Props = {
  isRequestSent: boolean;
  userId: string;
};

function AddCancelRequestButton({ isRequestSent, userId }: Props) {
  const [isFriendRequestSent, setIsFriendRequestSent] =
    useState<boolean>(isRequestSent);
  const { accessToken } = useSelector((state: RootState) => state.user.user);
  const addMutation = useAddFriendMutation(accessToken);
  const cancelMutation = useCancelRequestMutation(accessToken);
  return isFriendRequestSent ? (
    <Button
      onClick={() => {
        cancelMutation.mutateAsync(userId).then(() => {
          setIsFriendRequestSent(false);
        });
      }}
      className={"rounded-xl bg-gray-600 font-medium text-md hover:bg-gray-500"}
    >
      {cancelMutation.isLoading ? (
        <RotateCw className={" animate-spin"} />
      ) : (
        "Cancel Request"
      )}
    </Button>
  ) : (
    <Button
      onClick={async () => {
        addMutation.mutateAsync(userId).then(() => {
          setIsFriendRequestSent(true);
        });
      }}
      className={
        "rounded-xl bg-darkPurple font-medium text-md hover:bg-darkPurple/80"
      }
    >
      {addMutation.isLoading ? (
        <RotateCw className={" animate-spin"} />
      ) : (
        "Add Friend"
      )}
    </Button>
  );
}

export default AddCancelRequestButton;
