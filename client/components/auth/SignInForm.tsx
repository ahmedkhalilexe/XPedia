"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInType } from "@/utils/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useSignInMutation from "@/hooks/authHooks/useSignInMutation";
import { RotateCw } from "lucide-react";

type Props = {};

function SignInForm(props: Props) {
  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const signInMutation = useSignInMutation();

  return (
    <Form {...form}>
      <form
        className={"flex flex-col gap-6"}
        onSubmit={form.handleSubmit((data) => signInMutation.mutate(data))}
      >
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={" text-xl text-gray-900 "}>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type={"email"}
                  className={"text-gray-900 font-medium"}
                  placeholder={"example@email.dz"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name={"email"}
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={" text-xl text-gray-900"}>
                Password
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type={"password"}
                  className={"text-gray-900 font-medium"}
                  placeholder={"Password"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name={"password"}
        />
        <Button
          type={"submit"}
          className={
            "w-full text-lg bg-darkPurple text-saltWhite font-semibold hover:bg-darkPurple/70 "
          }
        >
          {signInMutation.isLoading ? (
            <RotateCw className={" animate-spin"} />
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default SignInForm;
