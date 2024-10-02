import { useMutation } from "react-query";
import { signInResponse, signUpPayload } from "@/utils/types";
import { publicAxios } from "@/utils/axios";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

const signUpMutationFunction = async (data: signUpPayload) => {
  const res = await publicAxios.post("/auth/signUp", { ...data });
  return res.data as signInResponse;
};

const useSignUpMutation = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: signUpMutationFunction,
    onSuccess: (data) => {
      toast({
        variant: "default",
        title: "Signed Up successfully",
        description: "You have successfully signed up",
      });
    },
    onError: (error: AxiosError) => {
      if (error.status === 400) {
        toast({
          variant: "destructive",
          title: "Sign Up failed",
          description: "Could not sign up, Email already exists",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Sign Up failed",
          description: "Could not sign up, please try again",
        });
      }
    },
  });
};
export default useSignUpMutation;
