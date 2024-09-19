"use client";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

function AuthProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default AuthProvider;
