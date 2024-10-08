"use client";
import SignInForm from "@/components/auth/SignInForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignUpForm from "@/components/auth/SignUpForm";
import ClientProvider from "@/components/reactQuery/ClientProvider";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type Props = {};

function AuthPage(props: Props) {
  const { isAuth, status } = useSelector((state: RootState) => state.user.auth);
  return status === "failed" && !isAuth ? (
    <main className="flex min-h-screen gap-8 flex-col items-center justify-center bg-lightGray containerBg">
      <h1 className={" text-4xl font-bold"}>XPedia</h1>
      <Tabs defaultValue={"SignIn"} className={"w-5/6 md:w-1/3 drop-shadow-md"}>
        <TabsList className={"w-full"}>
          <TabsTrigger
            value={"SignIn"}
            className={"w-full text-lg font-semibold"}
          >
            Sign In
          </TabsTrigger>
          <TabsTrigger
            value={"SignUp"}
            className={"w-full text-lg font-semibold text-gray-900"}
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value={"SignIn"} className={"w-full"}>
          <Card>
            <CardHeader>
              <CardTitle className={" text-4xl text-gray-900 font-bold"}>
                Sign In
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ClientProvider>
                <SignInForm />
              </ClientProvider>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value={"SignUp"} className={"w-full text-gray-900"}>
          <Card>
            <CardHeader>
              <CardTitle className={" text-4xl text-gray-900 font-bold"}>
                Sign Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ClientProvider>
                <SignUpForm />
              </ClientProvider>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  ) : null;
}

export default AuthPage;
