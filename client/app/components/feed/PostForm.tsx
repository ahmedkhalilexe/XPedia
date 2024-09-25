import UserAvatar from "@/app/components/feed/UserAvatar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { postSchema, PostType } from "@/app/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

function PostForm(props: Props) {
  const form = useForm<PostType>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      content: "",
      attachments: {} as FileList,
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className={
          " flex flex-col w-5/6 drop-shadow-md  rounded-xl bg-saltWhite p-4 gap-3 mt-5 mb-5"
        }
      >
        <div className={"flex w-full gap-2 bg-saltWhite"}>
          <UserAvatar className={"w-12 h-12"} textClass={"hidden "} />
          <FormField
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className={"w-full"}>
                  <FormControl>
                    <Textarea
                      {...field}
                      maxLength={280}
                      placeholder={"What is on your mind?"}
                      className={
                        "text-lg rounded-lg bg-saltWhite font-medium resize-none focus-visible:ring-2 focus-visible:ring-darkPurple focus-visible:ring-opacity-50"
                      }
                    ></Textarea>
                  </FormControl>
                </FormItem>
              );
            }}
            name={"content"}
          />
        </div>
        <div className={" w-full flex justify-between"}>
          <FormField
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      onChange={(e) => {
                        // console.log(e.target.files);
                        field.onChange(e.target.files);
                      }}
                      accept={"images/*"}
                      multiple
                      type={"file"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
            name={"attachments"}
          />
          <Button
            className={
              "w-fit font-bold text-lg bg-darkPurple hover:bg-darkPurple/80 rounded-lg"
            }
            type={"submit"}
          >
            Post
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default PostForm;
