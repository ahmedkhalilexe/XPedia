import { Button } from "@/components/ui/button";

type Props = {};

function DeleteFriendButton(props: Props) {
  return (
    <Button
      className={
        "rounded-xl bg-darkPurple font-medium text-md hover:bg-darkPurple/70"
      }
    >
      Delete Friend
    </Button>
  );
}

export default DeleteFriendButton;
