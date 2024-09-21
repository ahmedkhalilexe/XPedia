"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

type Props = {};

function FeedPage(props: Props) {
  const { isAuth, status } = useSelector((state: RootState) => state.user.auth);
  return status === "success" && isAuth ? (
    <div>
      <h1 className={" text-black"}>Feed Page</h1>
    </div>
  ) : null;
}

export default FeedPage;
