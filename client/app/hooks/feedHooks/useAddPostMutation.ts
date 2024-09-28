import { useMutation } from "react-query";
import { postAddResponse, postPayload } from "@/app/utils/types";
import { privateAxios } from "@/app/utils/axios";
import { useToast } from "@/hooks/use-toast";

const useAddPostMutation = (accessToken: string) => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: "addPost",
    mutationFn: async (data: postPayload) => {
      return privateAxios
        .post("/posts", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data as postAddResponse);
    },
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Post Added",
        description: "Your post has been added successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Post Failed",
        description: "Could not add post, Please try again",
      });
    },
  });
};

export default useAddPostMutation;
