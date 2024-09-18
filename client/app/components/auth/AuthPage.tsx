import SignInForm from "@/app/components/auth/SignInForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignUpForm from "@/app/components/auth/SignUpForm";

type Props = {};

function AuthPage(props: Props) {
  return (
    <main className="flex min-h-screen bg-lightGray">
      <div
        className={
          "flex min-h-full flex-col items-center justify-center p-24 flex-1"
        }
      >
        <Tabs defaultValue={"SignIn"} className={"w-2/4"}>
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
                <SignInForm />
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
                <SignUpForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className={"min-h-full flex-1 bg-blue-900"}></div>
      {/*<h1 className={" font-bold text-3xl"}>Hello, World!</h1>*/}
      {/*<SignInForm />*/}
    </main>
  );
}

export default AuthPage;
