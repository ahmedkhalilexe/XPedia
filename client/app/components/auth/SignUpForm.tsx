"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInSchema,
  SignInType,
  signUpSchema,
  SignUpType,
} from "@/app/utils/zod";
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

type Props = {};

function SignUpForm(props: Props) {
  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      dateOfBirth: new Date().toDateString(),
    },
  });

  return (
    <Form {...form}>
      <form
        className={"flex flex-col gap-6"}
        onSubmit={form.handleSubmit(() => {})}
      >
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={" text-xl text-gray-900 "}>Email</FormLabel>
              <FormControl>
                <Input {...field} type={"email"} className={"text-gray-900"} />
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
                Full Name
              </FormLabel>
              <FormControl>
                <Input {...field} type={"text"} className={"text-gray-900"} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name={"name"}
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
                  className={"text-gray-900"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name={"password"}
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={" text-xl text-gray-900"}>
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type={"password"}
                  className={"text-gray-900"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name={"confirmPassword"}
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={" text-xl text-gray-900"}>
                Date of Birth
              </FormLabel>
              <FormControl>
                <Input {...field} type={"date"} className={"text-gray-900"} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name={"dateOfBirth"}
        />
        <Button
          type={"submit"}
          className={
            " w-full text-lg bg-lightBlue text-gray-900 font-semibold hover:bg-blue-300"
          }
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
}

export default SignUpForm;
