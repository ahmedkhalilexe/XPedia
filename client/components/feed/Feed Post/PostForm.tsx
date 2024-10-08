import UserAvatar from "@/components/feed/UserAvatar";
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
import { postSchema, PostType } from "@/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddPostMutation from "@/hooks/feedHooks/useAddPostMutation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addPost } from "@/redux/feed/feedSlicer";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

function PostForm({ className }: Props) {
  const form = useForm<PostType>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      content: "",
      attachments: {} as FileList,
    },
  });
  const { accessToken } = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const postMutation = useAddPostMutation(accessToken);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (data) => {
          await postMutation
            .mutateAsync({
              body: data.content,
            })
            .then((res) => {
              console.log("adding to store");
              dispatch(addPost({ ...res.data, isLiked: false }));
            });
          form.reset();
        })}
        className={cn(
          " flex flex-col lg:w-5/6 drop-shadow-md  rounded-xl bg-saltWhite p-2 lg:p-4 gap-3 mt-5 mb-5",
          className,
        )}
      >
        <div className={"flex w-full gap-2 bg-saltWhite"}>
          <UserAvatar
            className={"w-12 h-12 lg:w-12 lg:h-12"}
            textClass={"hidden "}
          />
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
