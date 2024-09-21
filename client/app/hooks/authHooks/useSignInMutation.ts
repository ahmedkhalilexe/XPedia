import { useMutation } from "react-query";
import { publicAxios } from "@/app/utils/axios";
import { signInPaylaod, signInResponse } from "@/app/utils/types";
import { useDispatch } from "react-redux";
import { signIn } from "@/app/redux/auth/userSlice";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

const signInMutationFunction = async (data: signInPaylaod) => {
  const res = await publicAxios.post("/auth/signIn", { ...data });
  return res.data as signInResponse;
};

const useSignInMutation = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  return useMutation({
    mutationFn: signInMutationFunction,
    onSuccess: (data) => {
      dispatch(
        signIn({
          user: data.data,
          auth: {
            isAuth: true,
            loading: false,
          },
        }),
      );
    },
    onError: (error: AxiosError) => {
      if (error.status === 401) {
        toast({
          variant: "destructive",
          title: "Sign In Failed",
          description: "Could not sign in, Please check your credentials",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Sign In Failed",
          description: "Could not sign in, Please try again",
        });
      }
    },
  });
};

export default useSignInMutation;
