"use client";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import { ReactNode, useLayoutEffect } from "react";
import { getRefreshToken } from "@/app/redux/auth/userSlice";
type Props = {
  children: ReactNode;
};

function AuthProvider({ children }: Props) {
  useLayoutEffect(() => {
    if (!store.getState().user.auth.isAuth) {
      store.dispatch(getRefreshToken());
    }
  }, []);
  return <Provider store={store}>{children}</Provider>;
}

export default AuthProvider;
